# Audio
FudgeCore supports WebAudio and synchronizes both graphs. It creates the graphs necessary for threedimensional audio and offers interfaces to extend these graphs with other WebAudio-nodes
- a simple way to include audio, is to drag an audio-file to the internal resources, which creates an Audio-Resource
- drag that resource to a node in the graph. This creates a component that binds the audiosignal to the node and allows for control
- simple features like volume, start/stop and loop are supported for convenience
- to extend the graph or to control the audio nodes within, using all the features of WebAudio, access the component and the audio resource programmatically