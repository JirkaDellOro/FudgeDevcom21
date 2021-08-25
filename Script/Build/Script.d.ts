/// <reference types="../../Fudge/Core/FudgeCore" />
declare namespace Script {
}
declare namespace Script {
    import ƒ = FudgeCore;
    class ScriptData extends ƒ.ComponentScript {
        static readonly iSubclass: number;
        diameter: string;
        mass: string;
    }
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
    import ƒ = FudgeCore;
    class Hud extends ƒ.Mutable {
        private static instance;
        private static controller;
        private data;
        private headline;
        private time;
        static init(): void;
        static set(_node: ƒ.Node): void;
        static get time(): number;
        protected reduceMutator(_mutator: ƒ.Mutator): void;
    }
}
