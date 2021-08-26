# Script Component
Implement your own script components to use them in the editor and attach them to nodes. A new project offers a template. Use this template to create a script that spins the orbits for the earth and the moon.
## Implementation
- rename the file CustomComponentScript and the class within (e.g. ScriptOrbit)
- add a property to control the speed of rotation (e.g. angularVelocity)
- add an update-method that rotates the node containing this component by an amount calculated from the velocity and the time passed since the last frame of the game loop
- when the component gets attached to the node, add an event listener to the game loop calling this update method each frame
## Usage
- in the editor, drag and drop the component from the script-view to the orbit-nodes
- adjust the property that shows up at the component to the desired orbit speed