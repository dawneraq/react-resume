---
layout: post
title:  "CapitalOto.com"
projects: true
tag:
- work
- design
---
Shortly before my first internship ended, a software architect under whom I worked told me,

>Being a software engineer a little funny. It's not like being a building architect or a carpenter, where you can drive by a house and tell your kid, "I built that!"
>
>With websites it's more like, "Well I didn't build this, but I fixed a lot of bugs in it."

## I got to break the mold and rebuild an entire website for a client.

In January, I received a certain job alert from the wonderful CS Department Secretary Chris Coonrad: A local ear, nose, and throat practice was looking for (and willing to pay) "an undergraduate student, versed in website design, to help us update our current webpage".

![original site](/assets/images/site_old.png){: title="Eugh." }
<figcaption class="caption">The original site, last updated circa 2012.</figcaption>

A quick look at the existing website showed that it needed some serious work&mdash;the secondary navigation was nearly invisible; too many pages were dry walls of text; similar information that could've fit in one place was located in separate subpages. Most importantly, the two main functions that the site was supposed to perform, scheduling appointments and guiding the user to their Patient Portal, did not make themselves abundantly distinct on the homepage.

Check out the old site yourself [on the Wayback Machine](https://web.archive.org/web/20170127015216/http://capitaloto.com/), if you dare.

![audiology](/assets/images/audiology.png){: title="the horror" }
<figcaption class="caption">Not pictured: the maze of medical literature accessible from the sidebar on the left.</figcaption>

*Damn,* I thought. *What a great opportunity! Tons of extremely qualified students are definitely gonna apply for this...Oh well, I might as well try.* So I sent over my newly HTML-migrated resume and promptly forgot about it.

Five months later, I'd rebuilt Capital Otolaryngology's website from the ground up with Jekyll, designed them a completely new logo, and written up a pretty detailed README containing maintenance instructions for self-described "non-computer people". Also, the practice administrator told me that I was one of only about three people who'd sent in their resume for the requisition. Go figure.

## Process

### Site

![site map](/assets/images/site_map.jpeg)
<figcaption class="caption">The site requirements, as defined by one of the practice administrators.</figcaption>

Overall, the content was to remain mostly the same, just with a more modern format. Other than the sprawling copy in the Patient Learning section, the information architecture was pretty simple.

![homepage mockup](/assets/images/homepage_mockup.jpeg)
<figcaption class="caption">The homepage mockup I was handed.</figcaption>

With the new site, CapitalOto wanted to make sure that it was easy to navigate to the practice's Patient Portal, where patients and doctors exchange medical data like checkup results and suggestions for followup procedures. The existing site had no such link.

[![homepage medium-fi mockup](/assets/images/homepage_medium_fi_mockup.png)](https://app.moqups.com/4wHHArhWuk/view/page/a71fc1274)

Because I hadn't yet learned of the existence of web design tools like Sketch and Figma at the time, I set about creating interactive wireframes for the new site with a free tool called [Moqups](https://moqups.com/). The free version is rather limited, but it got the job done. You can still view the wireframes by clicking the image above.

### Logo

![ENT logos](/assets/images/ent_logos.png)

In general, there seem to be only two possible directions when it comes to a logo for an ENT practice:

1. the eponymous body parts, disembodied and reassembled
2. a cross-section of the human head, optionally highlighting said parts

![CapitalOto disemboided parts logo](/assets/images/crog_logo_old.jpeg)

CapitalOto was no exception to either rule. Pictured is one of their pre-2012 logos, printed on their stationery. 

One logo idea put forth by the practice was a map of the Capital Region, with stars indicating the practice's three locations. That concept might have given the wrong impression that Capital Region Otolaryngology *only* serves patients within that region&mdash;some patients reside in other areas like Vermont.

![some logo ideas](/assets/images/crog_logo_ideas.jpeg)

![more logo ideas](/assets/images/more_logo_ideas.png)

Some "harsh light portrait" ideas I sketched that are meant to emphasize the ear, nose, and throat. My client contact furrowed her eyebrows when I showed them to her. Not because they're kinda creepy, but because it was hard for her to parse a human face in some of them.

![an existing circle logo](https://static.wixstatic.com/media/6fa9e9_5aece613965a48ee933f66ca5b4c8ec0~mv2.gif)
![another existing circle logo](https://cdn.websites.hibu.com/a86e23059d774356be073b8b82a67804/dms3rep/multi/mobile/logo01.png)

The concept we ended up going with was to highlight the ear, nose, and throat of a head's silhouette using colored circles. Given the existing logo, it seemed like the next logical step. Yes, it's been done before. But it's a little more clean and unique than some of the examples I found online&mdash;due in no small part to some anatomy advice from one of the doctors.

## Final deliverables

![new site](/assets/images/site_new.png)
<figcaption class="caption">A landing page that will actually make visitors want to continue.</figcaption>

![mobile map](/assets/images/map_mobile.png){: title="delicious responsiveness" }
<figcaption class="caption">Feeling Responsive, the Jekyll template I used, is true to its name.</figcaption>

![new logo](https://github.com/dawneraq/capitaloto/blob/master/assets/img/capitaloto_logo.png?raw=true)
<figcaption class="caption">Perhaps the most challenging part of the whole undertaking.</figcaption>

## What I learned

### On the design side

- Regarding the new logo: client-designer disagreements (and stubornness, on either side) are an inescapable part of the visual design process. Some visual abstraction that makes sense to you may not read the same to someone else.
- ~~Free tools that let you create interactive wireframes of webpages must be a closely guarded industry secret.~~
  - Figma first released in September of 2016 (3 months before I started this project), so I mustn't've been looking hard enough.
- Conducting a content audit for a website that hasn't been updated in a while is its own can of worms. Its roadblocks may include an inability to take new high-resolution photos on short notice, or the delicate balancing act between brevity and necessity for large bodies of text.

### On the dev side

- A lot of web templating languages are essentially the same&mdash;Liquid, which Jekyll uses, was easy to pick up after already knowing Angular.
- Internet Explorer is more particular than other browsers about the order in which Google Maps API resources are loaded.
- Chrome DevTools' device emulator alone isn't enough to ensure that mobile views look the way you want them to.

### Also

- That "comic book superhero neck muscle" in the logo is called the sternocleidomastoid.

## What I would've done differently

- Given that the majority of the site's users are on the older side, and therefore may need accessibility accommodations, I would've gone through the front-end and made sure that the site's content was compatible with screen readers.
- Better yet, I would've done some user testing at each design stage, especially with not-so-computer-literate people.
- Looking back three years later, I've noticed that CapitalOto.com hasn't changed at all. No announcements, no different doctors listed, nothing. This is likely due to the fact that despite writing the README as clearly and concisely as I could, installing and picking up a static site generator like Jekyll from scratch is hard. I chose that tool because I was already familiar with it after building my GitHub Pages homepage. And I rationalized that choice by assuming CapitalOto was always going to have a tech-savvy RPI student in a part-time IT role. Perhaps a more user-friendly technology like Squarespace would've helped ease the site handoff and maintainability.

You can see CapitalOto.com for yourself [here](https://capitaloto.com) and the source code [here](https://github.com/dawneraq/capitaloto).

## Want to see more of my UX design work?

[Email me](mailto:{{ site.email }}) and I'll send you my portfolio.