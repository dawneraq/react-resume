---
title: "liberation: A Code Poem"
date: 2017-11-13
tag:
  - ACI
  - art
---

<iframe height="500" style="width: 100%;" scrolling="no" title="liberation" src="https://codepen.io/dawneraq/embed/rpeQbM?height=500&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/dawneraq/pen/rpeQbM'>liberation</a> by Andrew Aquino
  (<a href='https://codepen.io/dawneraq'>@dawneraq</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This is my first crack at code poetry. It was an Art & Code & Interactivity assignment, so naturally, the requirements were few and highly open to interpretation:

1. It must be "code"
1. It must be a "poem"
1. It must run, which implies that it may need to compile, further implying instructions may be necessary

In fact, I consider this our most enigmatic assignment. For context: our professor Shawn tasked each of us with having a friend select a random chapter to read from Italo Calvino's _Cosmicomics_. Pretty surreal stuff.

## But how does one write code poetry?

One example procedural implementation of printed a slightly different poem based on the value of randomly generated numbers, a kind of choose-your-own adventure poem where the compiler chooses the adventure for you. Going a little deeper, instead of random numbers deciding the outputted poem, you could generate poetic output from a knowledge graph of philosophical boolean conditions, e.g. `if (youDidYourBest) today = 'good';`.

At first I was lost. I didn't feel very inspired by the example poems we saw in class, until Shawn showed us [code-poetry.com](http://code-poetry.com/home), a collection of a dozen unique code poems. One that stuck out to me in particular was titled _bark.png_:

![bark](http://code-poetry.com/static/img/bark.png)

<figcaption>
  Hatcheting the bark
  <br />
  Her red hands blister
  <br />
  The rotten wood falls away
</figcaption>

The image encodes assembly instructions to print out the above haiku using an esoteric programming language called Piet. _**Dude, what?!**_ Let that sink in for a moment. [Piet](http://www.dangermouse.net/esoteric/piet.html) is a Turing-complete language, so it can do anything from [approximating pi](https://www.bertnase.de/npiet/npiet-execute.php) to [telling someone you love them](http://www.dangermouse.net/esoteric/piet/ILoveYouLaura-Explained.png). `bark.png`'s author Daniel Holden has an [in-depth explanation at his site](http://theorangeduck.com/page/making-poetry-piet) of how the image was made. Piet is one hell of a rabbit hole into which I will someday dive...

Anyway, I got really hooked on the visual aspect of things, but I didn't just wanna copy Daniel's idea. (If you read the explanation, you'll also see that requires a jaw-dropping attention to detail that I just did not have time for.) I was still lost, until suddenly something clicked. Similarly to when I stopped using LaTeX to write my resume, I realized that I already know how to arrange and style stuff using HTML and CSS. As for making those two languages more human-readable and hopefully more poetic, I'd learned how to use the SASS CSS preprocessor in the previous semester, and its HTML equivalent Pug over the summer. So I had execution covered.

## All I needed now was an idea.

<!-- TODO Find a different picture -->
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/Ba2K4EvH8Sp/" data-instgrm-version="8" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/Ba2K4EvH8Sp/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by 𝔞𝔰 𝔞𝔟𝔬𝔳𝔢 𝔰𝔬 𝔟𝔢𝔩𝔬𝔴 (@tremulant_)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2017-10-29T21:06:31+00:00">Oct 29, 2017 at 2:06pm PDT</time></p></div></blockquote> <script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

I eventually found inspiration from this photo taken by a friend of mine. Dagger through a smartphone? Seems like an interesting logo. Some minor digging revealed it to be that of a brand called [KILL YOUR GOD](http://www.killyourgod.net/). I admit some of their edgy black merch looks kinda dope. But I couldn't help but feel it was somewhat pretentious too. I've heard [the urgent cries](https://www.theguardian.com/technology/2017/oct/05/smartphone-addiction-silicon-valley-dystopia) from (some former) tech giant employees about how the addictive nature of social media is creating a dystopia, but come on. The header on KILL YOUR GOD's landing page is an invitation to consume more social media. It's almost as if supporting this brand's message requires buying into the very things their image is against. Obviously these guys don't want you to literally stab your smartphone. How could you, right after following them on Instagram and Facebook?

A bit of research on CSS-animated flames later, and voila. I'm not anti-anti-smartphone. They're important communication tools that can sometimes suck us in a little too much. South Park season 20 already illustrated what it's like to overdramatize quitting social media. Think of _liberation_ as a simpler cautionary tale.
