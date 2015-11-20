---
title: Building and releasing my own open source project
date: 2015-11-03 07:39 CST
tags: tools, workflow
published: false
---

As part of my goal of constantly leveling up my abilities in web development,
I decided to learn all about building layouts from scratch, as well as learn
various build tools used by project teams.

After playing around with tons of frameworks out there, I got tired of dealing
with all of the bloated stuff available and ended up just building my own simple
grid that is based off of current web standards (IE: Flexbox).

I learned a lot in the process of making it work, interviewing people about what
they wanted, and the entire distribution process so that is what I wanted to
share today.
READMORE

## Why another grid?
Blue Grid is a simple, easy to use, grid based on flexbox. I was tired of
using float based layouts and living in the past. I thought something had to be
out there, and there is one called "Flexbox Grid" which does a pretty good job.

Overall, after checking it out...it just wasn't enough. Also it isn't the most
semantic, NOR is it the best for rapid prototyping. Since I have experience with
a wide range of frameworks, I felt qualified to just build my own by taking the
best parts of everything out there and combining it into an updated grid!

I made Blue Grid both for rapid prototyping (hence all of the classes) AND for
more semantic project building via mixins. You can do one or the other, or
both...depending on your project needs. Anyway, I'm not here to talk about Blue
Grid, if you want to learn more you can just go to the
[Github project page](http://www.github.com/colbycheeze/bluegrid) or [Docs](http://colbycheeze.github.io/bluegrid/).

I'd rather chat about the whole experience and how you can go through the
process of releasing a project yourself.

## Enhancing Gulp
