---
title: Building My Middleman Blog
date: 2015-02-26 15:37 UTC
tags: Design, How to
published: false
---

Building my own blog from scratch was a lot more work than I realized. There
were so many things that I did not know how to do, and as simple as it sounded
to me, "Oh hey, let's just put up a basic static site using Middleman" it really
did not turn out that way. READ MORE

When you build a blog with a framework like Wordpress things can be very simple.
A lot of stuff is done for you, and you have a wide range of plugins which you
can install to take care of more of the details, plus themes will handle the
styling on your page.

That said, I had a few goals in mind when building this page. First off, I
really am using this as a learning experience, thus I wanted to get in touch
with all of the essentials for designing and coding a site. The other thing was,
I wanted everything to be very customizable without having to just "accept" some
plugin which did almost what I wanted.

### The steps

I had to begin by getting Middleman fully set up. This had quite a few problems,
such as getting stuck being unable to have my LiveReload working. Once I
realized the correct setup for that, I was on my way.

#### Setup
Next was following along with the Thoughtbot setup article here: [ Styling a
Middleman blog with Bourbon, Neat and
Bitters ](https://robots.thoughtbot.com/middleman-bourbon-walkthrough)
With the basics out of the way, I had no idea where to start with the design and
styling. I've followed enough HTML and CSS tutorials to understand how they
work, but actually putting it all to use was way beyond the scope of what you
learn in most of online courses and quick references.

What helped me the most was just going through various blogs online to get an
ideas of layout, and then browsing pages on Github that used clean practices,
such as the Upcase website. My goal was to use Sass and clean practices in order
to generate a codebase which was manageable as my website grows.

Current iteration of the site looks like this.
![Nav Complete Iteration](http://i.gyazo.com/5830729b9482927e7c6120ddbc31c10e.png "Nav Complete Iteration")
Would you believe me if I told you it took me 2 hours just to get that top Nav
set up? I ran into a bunch of issues with getting things lined up, and figuring
out positioning. Once I spent some time reading over the CSS, Bourbon, and Neat
docs as well as examining how a few other sites did their headers, I was able to
get everything complete.
