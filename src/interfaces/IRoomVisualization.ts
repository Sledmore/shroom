export interface IRoomVisualization {
  addFloorChild(element: PIXI.DisplayObject): void;
  addWallChild(element: PIXI.DisplayObject): void;
  addBehindWallChild(element: PIXI.DisplayObject): void;
  addContainerChild(element: PIXI.DisplayObject): void;
  addTileCursorChild(element: PIXI.DisplayObject): void;

  removeBehindWallChild(element: PIXI.DisplayObject): void;
  removeContainerChild(element: PIXI.DisplayObject): void;

  addCursorChild(element: PIXI.DisplayObject): void;
  addMask(element: PIXI.DisplayObject): void;
}
