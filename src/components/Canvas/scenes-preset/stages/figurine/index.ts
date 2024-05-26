import * as THREE from "three";
import { consulters, type types } from "scene-preset";
import {
  type Scene,
  type Scenes,
  type SceneExport,
} from "scene-preset/lib/types/consulters";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default {
  figurine: {
    properties: {
      position: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Vector3(Math.PI, 0, 0),
    },
    object() {
      return consulters.getProceduralGroup([
        {
          async getIntersectionMesh() {
            const loader = new GLTFLoader();
            loader.setCrossOrigin("anonymous");
            const scene = await new Promise((resolve) => {
              loader.load(
                "./models/a_goddess_statue/scene.gltf",
                (gltf: { scene: { children: THREE.Object3D[] } }) => {
                  const sculpture = gltf.scene.children[0];
                  sculpture.scale.setScalar(0.05);
                  sculpture.position.x = 0;
                  sculpture.position.y = 0;
                  sculpture.rotation.z = 0;

                  resolve(gltf.scene);
                }
              );
            });

            console.log(scene)

            return scene as THREE.Object3D;
          },
          dimensions: [1],
        },
      ]);
    },
    onSetup(_: any) {},
    onAnimation: ({ object3D }: SceneExport) => {},
  } as unknown as Scene,
} as Scenes;
