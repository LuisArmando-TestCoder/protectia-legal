import * as THREE from "three";
import presetScene, { consulters, events, type types } from "scene-preset";
import scene from "./scene";

let sceneEvents: {
  sceneGroup: THREE.Group;
  onSetup(canvasState: types.state.CanvasState): void;
  onAnimation(canvasState: types.state.CanvasState): void;
};

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import PointLightSet from "../../meshes/PointLightSet";

let figurine: THREE.Object3D;
let light: THREE.Object3D;
let lightRotation = 0;
let lightDistanceFromPivot = 31;
const lightPivot = { x: 0, z: 40 };
const figurineDistanceScale = 50;

const targetLightPositions = {
  x: 0,
  z: 0,
  y: 0,
};

let targetFigurineX = 0,
  figurineX = 0,
  targetFigurineZ = 0,
  figurineZ = 0;

type Axis = "x" | "y" | "z";

export default (id: string) =>
  presetScene(
    {
      async setup(canvasState: types.state.CanvasState) {
        // sceneEvents = await consulters.getSceneLifeCycle(scene);

        light = PointLightSet([
          {
            position: new THREE.Vector3(
              lightPivot.x * Math.sin(lightRotation) * lightDistanceFromPivot,
              -25,
              lightPivot.z * Math.cos(lightRotation) * lightDistanceFromPivot
            ),
            color: "#e1d3c4",
            intensity: 1,
            distance: 500,
            decay: 10,
          },
        ]).children[0];

        const loader = new GLTFLoader();
        loader.setCrossOrigin("anonymous");
        const scene = await new Promise((resolve) => {
          loader.load(
            "./models/a_goddess_statue/scene.gltf",
            (gltf: { scene: { children: THREE.Object3D[] } }) => {
              const sculpture = gltf.scene.children[0];
              sculpture.scale.setScalar(10);
              sculpture.position.x = lightPivot.x;
              sculpture.position.y = -94;
              sculpture.position.z = lightPivot.z;

              sculpture.rotation.z = Math.PI;

              resolve(sculpture);

              figurine = sculpture;
            }
          );
        });

        window.addEventListener("mousemove", (event: MouseEvent) => {
          // figurine.rotation.z =
          //   Math.sin(event.clientX / window.innerWidth) * 2 + Math.PI * -1.25;
          targetFigurineX = event.clientX;

          lightRotation = (event.clientX / window.innerWidth) * Math.PI * 2;

          targetLightPositions.x =
            lightPivot.x + Math.sin(lightRotation) * lightDistanceFromPivot;
          targetLightPositions.z =
            lightPivot.z + Math.cos(lightRotation) * lightDistanceFromPivot;
          targetLightPositions.y =
            (-event.clientY / window.innerHeight) *
              Math.PI *
              lightDistanceFromPivot +
            5;
        });

        window.addEventListener("scroll", () => {
          targetFigurineZ = window.scrollY;
        });

        canvasState.scene?.add(scene as THREE.Object3D, light);
      },
      animate(canvasState: types.state.CanvasState) {
        sceneEvents?.onAnimation(canvasState);
        // figurine.rotation.z += .001;

        const closeUpSpeedLight = 0.03;

        Object.keys(targetLightPositions).forEach((key: string) => {
          light.position[key as Axis] +=
            (targetLightPositions[key as Axis] - light.position[key as Axis]) *
            closeUpSpeedLight;
        });

        const closeUpSpeedFigurine = 0.03;

        if (figurine) {
          figurineX += (targetFigurineX - figurineX) * closeUpSpeedFigurine;

          figurine.rotation.z =
            Math.sin(figurineX / window.innerWidth) * 2 + Math.PI * -1.25;

          figurineZ += (targetFigurineZ - figurineZ) * closeUpSpeedFigurine;

          figurine.position.z =
            lightPivot.z +
            (figurineZ / document.body.clientHeight) * figurineDistanceScale;
        }
      },
    },
    `#${id}`
  );
