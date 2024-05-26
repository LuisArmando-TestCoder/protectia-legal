import * as THREE from "three";
import presetScene, { consulters, events, type types } from "scene-preset";
import scene from "./scene";
import gsap from "gsap";

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
let lightDistanceFromPivot = 11;
const lightPivot = { x: 0, z: 60 };

let tl: gsap.core.Timeline;

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

        tl = gsap.timeline();

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
          figurine.rotation.z =
            Math.sin(event.clientX / window.innerWidth) * 2 + Math.PI * -1.25;

          lightRotation = (event.clientX / window.innerWidth) * Math.PI * 2;

          light.position.x =
            lightPivot.x + Math.sin(lightRotation) * lightDistanceFromPivot;
          light.position.z =
            lightPivot.z + Math.cos(lightRotation) * lightDistanceFromPivot;
          light.position.y = -event.clientY / window.innerHeight * Math.PI * lightDistanceFromPivot + 5
        });

        window.addEventListener("scroll", () => {
          figurine.position.z =
            lightPivot.z + window.scrollY / window.innerHeight;
        });

        canvasState.scene?.add(scene as THREE.Object3D, light);
      },
      animate(canvasState: types.state.CanvasState) {
        sceneEvents?.onAnimation(canvasState);
        // figurine.rotation.z += .001;
      },
    },
    `#${id}`
  );
