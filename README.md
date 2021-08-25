# Pick to display data
Now that nodes can be fed to the hud to display the data, enable picking for the user.
- remove Hud.set of the Earth
- add a listener to the canvas for the capture phase, in order not to pick the focus arrows
- add handler that feeds mouse offset to Picker.pickViewport, which returns a list of objects picked, ordered by distance
- if there are objects in the list, send to Hud