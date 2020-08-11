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

<!-- TODO Script won't display -->
<!-- <script src="https://gist.github.com/dawneraq/6a8c0611a073ed3e9d1632c9553ffca9.js"></script> -->

<!-- TODO Show TidalCycles example too -->

```cpp
// Electric Zoo, a.k.a. the one that goes "bee boo boo bop boo boo beep".

SndBuf bufKick => dac;
SndBuf bufSnare => dac;
SndBuf bufHat => dac;

"/Applications/miniAudicle.app/Contents/Resources/examples/data/kick.wav" => bufKick.read;
"/Applications/miniAudicle.app/Contents/Resources/examples/data/snare.wav" => bufSnare.read;
"/Applications/miniAudicle.app/Contents/Resources/examples/data/hihat.wav" => bufHat.read;

SinOsc sin => ADSR e => JCRev r => dac;
e.set(200::ms, 8::ms, .5, 50::ms); // weak attack
0.15 => r.mix; // fairly dry reverb

0.18::second => dur T; // 167 bpm
0 => int counter;

// Each member of an associative array has to be instantiated,
//  to circumvent NullPointerException
class Note {
  float frequency;
}

fun void kick() {
  while (true) {
    (counter - 1) % 16 => int sixteenth;
    [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0] @=> int kicks[];

    if (kicks[sixteenth]) {
      0 => bufKick.pos;
    }

    1::T => now;
  }
}

fun void snare() {
  while (true) {
    if (counter % 4 == 3) {
      0 => bufSnare.pos;
    }

    1::T => now;
  }
}

fun void hat() {
  while (true) {
    0 => bufHat.pos;

    // Two 16th note hits
    if (Math.randomf() > 0.75) {
      0.5::T => now;
      0 => bufHat.pos;
      0.5::T => now;
    }
    // Normal 8th note hit
    else {
      1::T => now;
    }
  }
}

fun void synth() {
  Note notes[5];

  new Note @=> notes["G#"];
  new Note @=> notes["A#"];
  new Note @=> notes["Clo"];
  new Note @=> notes["F"];
  new Note @=> notes["Chi"];

  830.61 => notes["G#"].frequency;
  466.16 => notes["A#"].frequency;
  523.25 => notes["Clo"].frequency;
  349.23 => notes["F"].frequency;
  1046.50 => notes["Chi"].frequency;

  ["G#", "G#", "A#", "Clo", "", "F", "Chi", "", "", "", "", "", "", "", "", ""] @=> string sequence[];

  while (true) {
    (counter - 1) % 16 => int sixteenth;

    // Play a note
    if (sequence[sixteenth] != "") {
      notes[sequence[sixteenth]].frequency => sin.freq;
      e.keyOn();
      0.5::T => now;
      e.keyOff();
    }
    // Rest
    else {
      0.5::T => now;
    }

    0.5::T => now;
  }
}

spork ~ kick();
spork ~ snare();
spork ~ hat();
spork ~ synth();

while (true) {
  ++counter;

  1::T => now;
}
```
