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

  ngOnInit() {}

}
