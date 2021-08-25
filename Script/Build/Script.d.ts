/// <reference types="../../Fudge/Core/FudgeCore" />
declare namespace Script {
}
declare namespace Script {
    import ƒ = FudgeCore;
    class ScriptOrbit extends ƒ.ComponentScript {
        static readonly iSubclass: number;
        angularVelocity: number;
        constructor();
        hndEvent: (_event: Event) => void;
        private update;
    }
}
declare namespace Script {
}
