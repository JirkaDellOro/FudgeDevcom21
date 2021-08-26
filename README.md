# Graph
Create resources first and the build a graph using those resources. Assets are already in the project, see the folders Textures and Sounds.
## Resources
- open the project panel
- create a sphere and adjust the settings to make it somewhat smooth
- drag the images from the external-view to the internal-view to create textures with it
- create a materials using ShaderTexture and attach the textures to it
- create a graph
- name the resources in a meaningful manner
## Graph
- open the graph panel
- drag the graph into the render view
- start building a proper hierarchy that will ease the further development
- for the example of a solar system, build it the follwing way
  - SolarSystem (root)
     - Sun | 1 Material, 1 Mesh (animated texture)
       - OrbitEarth | 1 Transform (in the center of the sun, will rotate)
         - Earth | 1 Material, 1 Mesh, 1 Transform (animated mesh)
           - OrbitMoon | 1 Transform (in the center of the earth, will rotate)
             -  Moon | 1 Material, 1 Mesh, 1 Transform  
- be careful when manipulating the transforms
  - use pivot in ComponentMesh to manipulate only the mesh within the node
  - use ComponentTransform to manipulate the transformation of the node itself and the whole branch below. This will effect all additional transformations and animations in the branch later at runtime.