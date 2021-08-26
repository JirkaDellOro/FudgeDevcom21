# UserInterface
FudgeUserInterface may be used to synchronize game data with a virtual user interface (hud) for display and additional interaction.
## Preparation (already done in example)
- copy FudgeUserInterface to the project as done with FudgeCore and FudgeAid
- place a link in the html-file accordingly
- add a path to types in the file tsconfig.json
## Dom-Elements
- in the html-file, place a div-tag to hold the user interface
- within, create input-tags for the information to display and manipulate
- add an attribute `key` with a value corresponding to the property name in the game data (e.g. time)
## Hud-Class
- create a new class to keep information and control the user interface
- the class must extend ƒ.Mutable and therefore implement the method reduceMutator (empty in the example)
- import FudgeUserInterface along with FudgeCore (e.g. ƒUi) at the start of the class file
- find the dom-element holding the user interface and connect it to an instance of the Hud-class using ƒUi.Controller
- the controller now automatically synchronizes the data and the user interface
