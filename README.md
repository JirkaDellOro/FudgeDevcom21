# Scripting
To start with scripting, implement some manipulation the of nodes' components in the main program. Therefor, it is first necessary to find the components in the graph, thus also find the nodes containing them.
- find the nodes, iterate over the graph and pick the nodes of interest (e.g. sun, earth)
- find the components of interest (e.g. Mesh and Material) and assign them to variables for manipulation over time
- in the update function, manipulate the desired properties of the components (e.g. the pivot-matrices) considering the time passed since the last frame
- start the loop
