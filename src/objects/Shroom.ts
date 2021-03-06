import { IConfiguration } from "../interfaces/IConfiguration";
import { IFurnitureData } from "../interfaces/IFurnitureData";
import { AnimationTicker } from "./AnimationTicker";
import { AvatarLoader } from "./avatar/AvatarLoader";
import { FurnitureLoader } from "./furniture/FurnitureLoader";
import { FurnitureData } from "./FurnitureData";
import { HitDetection } from "./hitdetection/HitDetection";
import { Dependencies } from "./room/Room";

const defaultConfig: IConfiguration = {};
let globalDependencies: Dependencies | undefined;

export class Shroom {
  constructor(public readonly dependencies: Dependencies) {}

  static create({
    resourcePath,
    application,
    configuration,
    animationTicker,
    avatarLoader,
    furnitureData,
    furnitureLoader,
    hitDetection,
  }: {
    resourcePath?: string;
    application: PIXI.Application;
  } & Partial<Dependencies>) {
    furnitureData = furnitureData ?? FurnitureData.create(resourcePath);

    const realDependencies: Dependencies = {
      animationTicker: animationTicker ?? AnimationTicker.create(application),
      avatarLoader: avatarLoader ?? AvatarLoader.create(resourcePath),
      furnitureLoader:
        furnitureLoader ?? FurnitureLoader.create(furnitureData, resourcePath),
      hitDetection: hitDetection ?? HitDetection.create(application),
      configuration: configuration ?? {},
      furnitureData,
    };

    return new Shroom(realDependencies);
  }
}
