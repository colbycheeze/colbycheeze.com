---
title: Level up your workflow with Vim and Tmux
date: 2015-02-27 09:53 CST
tags: Tools, Vim, Tmux, Workflow
---

Level up your workflow with Vim and Tmux
========================================

This is my list of resources to help learn and/or upgrade your Vim and Tmux
workflow. Please let me know if you have any suggestions or questions.  READ MORE

### Learning
As a new user of Vim, I highly recommend NOT just straight up copying
someone else's massive dotfiles. Start from the basics and iteratively upgrade
yourself.

1. If you are just now learning Vim, the easiest way to get started is to simply
open up your terminal and type in ==vimtutor==

2. Next, I suggest doing at least the free levels in [Vim Adventures](http://vim-adventures.com/)

3. At this point, you are ready to either go full in and jump into VIM or you may
want to use a plugin for your current editor, such as Vintage mode in Sublime
Text 3. The more you practice, the easier it will become.

4. I recommend skimming through this amazing book, [Practical Vim](https://pragprog.com/book/dnvim/practical-vim) (no way you can absorb it all at once). There are some amazing tips in here that will take you from Vim newbie to Vim Ninja.

5. I got a large part of my knowledge by going through the Vim and Tmux workflow
videos on [ Upcase ](http://www.upcase.com/join). It is a subscription site, but
even if you join for only 1 month it is **totally** worth it just for the workflow
videos alone.


### Setup
If you are going to be using Vim / Tmux now, there are some basic defaults you
will want to get set up such as copy paste support, color themes, etc.

First off, I suggest that if you have a Mac you use Thoughtbot's "laptop" setup
which puts together some sensible defaults AND installs a ton of great apps for
developing in Ruby. They have a [script that does that on github]( https://github.com/thoughtbot/laptop ).

Once you have everything set up (or just skip to this step), you can [take a look
at their dotfiles.](https://github.com/thoughtbot/dotfiles) They have everything set up so that you add your own "local"
changes to files appended with .local. I have followed this convention, just in
case they update their repo in the future I can stay current without running
into problems.

These use something called [RCM](https://github.com/thoughtbot/rcm) to keep your dotfiles updated. I recommend
checking it out, as it would really suck to lose your local files and not have a
backup! That said, here are [ my dotfiles
](https://github.com/colbycheeze/dotfiles).

