namespace Script {
  import ƒ = FudgeCore;
  import ƒUi = FudgeUserInterface;

  export class Hud extends ƒ.Mutable {
    private static instance: Hud;
    private static controller: ƒUi.Controller;
    private data: ScriptData;
    private headline: string;
    private time: number = 1;

    public static init() {
      Hud.instance = new Hud();
      let dom: HTMLDivElement = document.querySelector("div");
      Hud.controller = new ƒUi.Controller(Hud.instance, dom);
      Hud.controller.updateUserInterface();
    }

    public static set(_node: ƒ.Node): void {
      Hud.instance.headline = _node.name;
      Hud.instance.data = _node.getComponent(ScriptData);
      console.log(Hud.instance.time, Hud.instance.headline, Hud.instance.data);
    }

    public static get time(): number {
      return Hud.instance.time;
    }

    protected reduceMutator(_mutator: ƒ.Mutator): void { /* nothing to reduce */ }
  }
}