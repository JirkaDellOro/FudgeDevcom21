"use strict";
var Script;
(function (Script) {
    var ƒ = FudgeCore;
    let viewport;
    let cmpMeshEarth;
    let cmpMaterialSun;
    document.addEventListener("interactiveViewportStarted", start);
    function start(_event) {
        // Hud.init();
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
        ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
        ƒ.Loop.start();
    }
    function update(_event) {
        cmpMeshEarth.mtxPivot.rotateY(360 * ƒ.Loop.timeFrameGame / 1000);
        cmpMaterialSun.mtxPivot.translateY(0.001 * ƒ.Loop.timeFrameGame / 1000);
        viewport.draw();
        ƒ.AudioManager.default.update();
        // ƒ.Time.game.setScale(Hud.time);
    }
})(Script || (Script = {}));
var Script;
(function (Script) {
    var ƒ = FudgeCore;
    ƒ.Project.registerScriptNamespace(Script); // Register the namespace to FUDGE for serialization
    class ScriptOrbit extends ƒ.ComponentScript {
        constructor() {
            super();
            // Properties may be mutated by users in the editor via the automatically created user interface
            this.angularVelocity = 1;
            // Activate the functions of this component as response to events
            this.hndEvent = (_event) => {
                switch (_event.type) {
                    case "componentAdd" /* COMPONENT_ADD */:
                        ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, this.update);
                        break;
                    case "componentRemove" /* COMPONENT_REMOVE */:
                        this.removeEventListener("componentAdd" /* COMPONENT_ADD */, this.hndEvent);
                        this.removeEventListener("componentRemove" /* COMPONENT_REMOVE */, this.hndEvent);
                        break;
                }
            };
            this.update = (_event) => {
                this.getContainer().mtxLocal.rotateY(this.angularVelocity * ƒ.Loop.timeFrameGame / 1000);
            };
            // Don't start when running in editor
            if (ƒ.Project.mode == ƒ.MODE.EDITOR)
                return;
            // Listen to this component being added to or removed from a node
            this.addEventListener("componentAdd" /* COMPONENT_ADD */, this.hndEvent);
            this.addEventListener("componentRemove" /* COMPONENT_REMOVE */, this.hndEvent);
        }
    }
    // Register the script as component for use in the editor via drag&drop
    ScriptOrbit.iSubclass = ƒ.Component.registerSubclass(ScriptOrbit);
    Script.ScriptOrbit = ScriptOrbit;
})(Script || (Script = {}));
//# sourceMappingURL=Script.js.map