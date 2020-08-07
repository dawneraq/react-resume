---
layout: post
title:  "Lune"
projects: true
tag:
- school
tagline: foo
---
<iframe src="https://player.vimeo.com/video/246562417" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<figcaption>Check out the viewer <a href="https://dawneraq.github.io/Lune/">here</a>, source code <a href="https://github.com/dawneraq/Lune">here</a>!</figcaption>

In my finest piece of double-dipped semester projects to date, I present Lune, a Google Cardboard viewer for a fully illuminated 3D model of the Moon.

Semester project requirements:

- ☑️ **Computer Graphics:** Something at least vaguely related to computer graphics?
- ️️️☑️️ **Earth & Sky:** An original piece of work that addresses an astronomical theme in a creative way

The transcript of the video above is [here](https://github.com/dawneraq/Lune/blob/master/CG-presentation.md), for more of an overview. Basically, I wanted to play around with the free Cardboard I got from my summer internship at AT&T. [Chrome Experiments](https://vr.chromeexperiments.com/) has some nice starter code that provides device orientation controls for the 3D scene's camera, and a split screen rendering with barrel distortion that'll make your scene Cardboard compatible.

I must say, [three.js](https://threejs.org/) makes manipulating 3D scenes a lot simpler compared to straight WebGL. However, I had to dedicate about half of the time I spent on this project on the following:

### Making the first visible angle of the Moon that of the familiar near side:

When I first loaded the model, the side of the Moon facing the viewer was the north pole. It resembled an asterisk (*) because it's really just a rectangular image being projected onto a sphere. No good! (About midway through the project, I loaded in [the topographically accurate 3D model of the Moon published by the USGS in 2005](https://pubs.usgs.gov/of/2006/1367/), but the looming deadline got in the way of figuring out why it didn't display at all.)

```js
objLoader.load( objName, function ( object ) {
  
  ...

  // Rotate object (Moon) here
  
  scene.add( object );
  
  ...
  
  resolve(object);
}, onProgress, (xhr) => { reject(xhr); } );
```

Doesn't work | Works
--- | ---
`object.rotation.y = someNumber;` | `object.children[0].rotation.y = someNumber;`

Using the code from the left column above, rotations seemed to have no effect. I kept seeing that same undesirable angle of the Moon on load, no matter the value of `someNumber`. I had to poke around in DevTools to figure out that `object`, the parameter in the callback of `objLoader.load`, does not actually represent the loaded object&mdash;rather, it's a three.js Group containing the object.

### Coordinating the model rotations with gyroscope data from the user's phone:

To quote the video above:

> The biggest challenge I ran into was getting ThreeJS' DeviceOrientationControls--which control the scene's camera--to respond correctly to changes in phone orientation. According to the [standard API for communicating device orientation information](https://developers.google.com/web/fundamentals/native-hardware/device-orientation/), the x and y axes are in the plane of the screen, positive towards the right and towards the top, respectively. And the z axis is normal to the screen, positive extending outward.

> With the phone positioned in counterclockwise-landscape orientation, the y and z axes are swapped. It took quite a bit of tinkering to figure out that to make the camera movement work correctly, I had to change the sequence of rotation axes for the Tait-Bryan angles in DeviceOrientationControls from Y-X'-Z'' to X-Y'-Z''.

![DeviceOrientationControls diff](https://raw.githubusercontent.com/dawneraq/gh-pages-resources/master/orientation-diff.png)

In the process of making this change, I quickly learned that trying completely random rotation sequences was only going to confuse me. Consulting that device orientation API led me in the right direction, helped to narrow down which permutations might give the result I wanted.