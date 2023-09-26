import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {
  Animation,
  ArcRotateCamera, Camera, Color3, PointLight,
  Database,
  Engine,
  FramingBehavior,
  HemisphericLight, Matrix,
  Mesh,
  Scene, SceneLoader, ScreenshotTools, StandardMaterial, Texture, Tools,
  Vector3, VideoRecorder, AssetsManager
} from '@babylonjs/core';
import * as LOADERS from '@babylonjs/loaders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  ngOnInit() {
    const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
    
    // Create engine
    const engine = new Engine(canvas, true, { premultipliedAlpha: false, preserveDrawingBuffer: true, stencil: true });
    
    const createScene = function () {

      // Create the scene
      const scene = new Scene(engine);

      //Adding a light
      var light = new PointLight("Omni", new Vector3(20, 20, 100), scene);

      // Create the default camera
      var camera = new ArcRotateCamera("Camera", 0, 0.8, 100, Vector3.Zero(), scene);
      camera.attachControl(canvas, false);

      // plugin to load .obj files
      const obj_loader = new LOADERS.OBJFileLoader(); 

      // The first parameter can be used to specify which mesh to import. Here we import all meshes
      SceneLoader.ImportMesh("", "./assets/", "StanfordBunny.obj", scene, function (meshes) {
        console.log(meshes);
      });

      // const assetsManager = new AssetsManager(scene);
      // const meshTask = assetsManager.addMeshTask('piano task', '', './assets/', 'StanfordBunny.obj');
      // meshTask.onSuccess = (task) => {
      //   const pianoMesh = task.loadedMeshes[0];
      //   // Do something with the mesh here
      // }
      // assetsManager.load();

      // Move the light with the camera
      scene.registerBeforeRender(function () {
        light.position = camera.position;
      });

      return scene;
    }

    // Assign the return scene to variable which I'll need in the below runRenderLoop callback function
    const scene = createScene();

    engine.runRenderLoop(function () {
      scene.render();  // Engine has renderred the scene into canvas
    });
  }

}
