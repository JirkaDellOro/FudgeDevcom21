"use strict";
var Script;
(function (Script) {
    var ƒ = FudgeCore;
    let viewport;
    let cmpMeshEarth;
    let cmpMaterialSun;
    document.addEventListener("interactiveViewportStarted", start);
    function start(_event) {
        Script.Hud.init();
        viewport = _event.detail;
        for (let node of viewport.getBranch())
            switch (node.name) {
                case "Earth":
                    cmpMeshEarth = node.getComponent(ƒ.ComponentMesh);
                    let cmpAudio = node.getComponent(ƒ.ComponentAudio);
                    cmpAudio.setPanner(ƒ.AUDIO_PANNER.MAX_DISTANCE, 0.1);
                    Script.Hud.set(node); // <- remove
                    break;
                case "Sun":
                    cmpMaterialSun = node.getComponent(ƒ.ComponentMaterial);
                    break;
            }
        // viewport.getCanvas().addEventListener("pointerdown", hndMouse, true);
        ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
        ƒ.Loop.start();
    }
    // function hndMouse(_event: MouseEvent): void {
    //   let posMouse: ƒ.Vector2 = new ƒ.Vector2(_event.offsetX, _event.offsetY);
    //   let picks: ƒ.Pick[] = ƒ.Picker.pickViewport(viewport, posMouse);
    //   if (!picks.length)
    //     return;
    //   Hud.set(picks[0].node);
    // }
    function update(_event) {
        cmpMeshEarth.mtxPivot.rotateY(360 * ƒ.Loop.timeFrameGame / 1000);
        cmpMaterialSun.mtxPivot.translateY(0.001 * ƒ.Loop.timeFrameGame / 1000);
        viewport.draw();
        ƒ.AudioManager.default.update();
        ƒ.Time.game.setScale(Script.Hud.time);
    }
})(Script || (Script = {}));
var Script;
(function (Script) {
    var ƒ = FudgeCore;
    class ScriptData extends ƒ.ComponentScript {
        constructor() {
            super(...arguments);
            this.diameter = "0";
            this.mass = "0";
        }
    }
    ScriptData.iSubclass = ƒ.Component.registerSubclass(ScriptData);
    Script.ScriptData = ScriptData;
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
var Script;
(function (Script) {
    var ƒ = FudgeCore;
    var ƒUi = FudgeUserInterface;
    class Hud extends ƒ.Mutable {
        constructor() {
            super(...arguments);
            this.time = 1;
        }
        static init() {
            Hud.instance = new Hud();
            let dom = document.querySelector("div");
            dom.style.visibility = "visible";
            Hud.controller = new ƒUi.Controller(Hud.instance, dom);
            Hud.controller.updateUserInterface();
        }
        static set(_node) {
            Hud.instance.headline = _node.name;
            Hud.instance.data = _node.getComponent(Script.ScriptData);
            console.log(Hud.instance.time, Hud.instance.headline, Hud.instance.data);
        }
        static get time() {
            return Hud.instance.time;
        }
        reduceMutator(_mutator) { }
    }
    Script.Hud = Hud;
})(Script || (Script = {}));
//# sourceMappingURL=Script.js.map