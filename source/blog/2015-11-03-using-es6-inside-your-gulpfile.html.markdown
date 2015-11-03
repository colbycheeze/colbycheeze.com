---
title: Creating a static site generator workflow with Gulp
date: 2015-11-03 07:39 CST
tags: tools, workflow
published: false
---

This month I have been upgrading my understanding of the various tools and
workflows outside of the Meteor ecosystem now that I am working at IBM.

In the course of building my new Blue Grid library, I realized I didn't have
a good way to actually build the files into something that could be distributed
or even viewed really outside of using Meteor.

Gulp is one of the most widely accepted build tools, so it only made sense for
me to start there. After spending some time writing everything up, I now have
something that can be reused in any future projects and I wanted to share.
READMORE

#### I just want it to run!
Perhaps many of you are already using ES6 features within your Node code as of
the Node 4 update, which supports most of it. Using modules such as `import gulp from 'gulp'` however, will not work as of yet. Luckily, there is a [great post by Mark Goodyear](https://markgoodyear.com/2015/06/using-es6-with-gulp/) which explains how to get it working.

## Enhancing Gulp
As for how to utilize ES6 in fun ways, mostly you can 
