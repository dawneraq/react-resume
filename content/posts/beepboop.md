---
title: "beepboop"
date: 2016-11-28
tag:
  - music
---

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/295205526&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

The entire reason I took Computer Music this semester was so that I could learn how to do this with 110 lines of code.

Facetiousness aside, it was a great class overall. [Rob Hamilton](http://homepages.rpi.edu/~hamilr4/) is a talented and helpful professor; between touring EMPAC's beefy recording interface and learning two music programming paradigms, his section of Computer Music was some of the most fun I've had in a college class.

One such paradigm is [ChucK](http://chuck.cs.princeton.edu/doc/), an open-source, strongly-timed programming language written in C++ by eccentric food-loving professors at Princeton. Its formula of writing functions to advance time, whose threads (shreds) are then forked (sporked) to on a virtual machine which makes sounds, clicks much better with my brain than the patch-cable-spaghetti-untangling of its opposite, [Max/MSP](https://cycling74.com/products/max/). ChucK is an extremely versatile programming language--you can use standard library functions for anything from [simulating the sound of a blown bottle](http://chuck.cs.princeton.edu/doc/examples/stk/blowbotl.ck) to [sonifying the Towers of Hanoi](http://chuck.cs.princeton.edu/doc/examples/hanoi++.ck).

The weekend Rob told each of us to familiarize ourselves with ChucK, I messed around with it for just a little while until I caught the transcription bug. This bug I nurtured throughout high school arranging every voice I could in prog metal songs yielded the following program:

<script src="https://gist.github.com/dawneraq/6a8c0611a073ed3e9d1632c9553ffca9.js"></script>
