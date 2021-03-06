namespace Script {
  import ƒ = FudgeCore;

  let viewport: ƒ.Viewport;
  let cmpMeshEarth: ƒ.ComponentMesh;
  let cmpMaterialSun: ƒ.ComponentMaterial;

  document.addEventListener("interactiveViewportStarted", <EventListener>start);

  function start(_event: CustomEvent): void {
    viewport = _event.detail;
    for (let node of viewport.getBranch())
      switch (node.name) {
        case "Earth":
          cmpMeshEarth = node.getComponent(ƒ.ComponentMesh);
          let cmpAudio = node.getComponent(ƒ.ComponentAudio);
          cmpAudio.setPanner(ƒ.AUDIO_PANNER.MAX_DISTANCE, 0.1);
          break;
        case "Sun":
          cmpMaterialSun = node.getComponent(ƒ.ComponentMaterial);
          break;
      }

    Hud.init();

    viewport.getCanvas().addEventListener("pointerdown", hndMouse, true);

    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
    ƒ.Loop.start();

  }

  function hndMouse(_event: MouseEvent): void {
    let posMouse: ƒ.Vector2 = new ƒ.Vector2(_event.offsetX, _event.offsetY);

    let picks: ƒ.Pick[] = ƒ.Picker.pickViewport(viewport, posMouse);
    if (!picks.length)
      return;
    
    Hud.set(picks[0].node);
  }

  function update(_event: Event): void {
    cmpMeshEarth.mtxPivot.rotateY(360 * ƒ.Loop.timeFrameGame / 1000);
    cmpMaterialSun.mtxPivot.translateY(0.001 * ƒ.Loop.timeFrameGame / 1000);

    viewport.draw();
    ƒ.AudioManager.default.update();

    
    ƒ.Time.game.setScale(Hud.time);
  }
}