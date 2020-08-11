---
title: "Fly of Despair"
date: 2016-12-30
projects: true
tag:
  - art
tagline: Disillusionment can be fun!
---

[Here's][fly-of-despair] a little something I put together for my Media Studio: Imaging final. It's pretty buggy, looks terrible on phone screens, and will make your browser poop itself if you scroll too far down the rabbit hole--but I'm backing down from optimizing it for now because it's already pretty entertaining. I hope that you get a kick out of it and that the theme isn't too hard to discern.

[![How much do you want Squidward to suffer?](/assets/images/despair.png)][fly-of-despair]

I have [Rachel Smith][parallax-codepen] to thank for much of the code; namely animating Squidward and the fake posts using CSS.

[The original project this was based on][your-home], a piece of 'net art' in which I wrote JavaScript to parse an XML file for the same 5 post data forever whenever the bottom of the page is reached, was solely a style-for-style ripoff of Facebook's homepage. Before settling on the page's current functionality, I'd toyed with the ideas of randomly inserting [Zalgo text][zalgo-text] the farther the user scrolls, or a similar effect with faces that appear in the images. My scattered college student brain did not make adequate time for those things.

### Future features

- Efficiency
- Mobile-responsiveness
- Updating the Notifications icon in the navbar according to the notification number displayed in the page title
- Those suggested by my professor and TA:
  - a futile but seemingly valuable score updated by Like and Comment buttons on each post
  - high-pitched screeching that increases in pitch according to the scroll position

One day (probably when the page disappears upon graduation) I'll implement this in such a way that doesn't eat so much processing power, perhaps with linear interpolation.

In short, there's effectively no difference between mindlessly scrolling through sensational "news" and falling through a surrealist nightmare.

[fly-of-despair]: http://homepages.rpi.edu/~aquina/fly_of_despair.html
[parallax-codepen]: https://codepen.io/rachsmith/post/how-to-move-elements-on-scroll-in-a-way-that-doesn-t-suck-too-bad
[your-home]: http://homepages.rpi.edu/~aquina/your_home.html
[zalgo-text]: http://www.eeemo.net/
