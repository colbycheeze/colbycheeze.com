---
title: Level up your workflow with Vim and Tmux
date: 2015-02-27 09:53 CST
tags: Tools, Vim, Tmux, Workflow
---

*This is my list of resources to help learn, setup, and upgrade your Vim and Tmux
workflow. It may not be as comfortable at first coming from a visual IDE, but
think of it as going from hunt and peck typing to touch. The difference is night
and day and you will be a happier developer because of it.*  READMORE

### Learning
> As a new user of Vim, I highly recommend NOT just straight up copying
> someone else's massive dotfiles. Start from the basics and iteratively upgrade
> yourself.

1. If you are just now learning Vim, the easiest way to get started is to simply
open up your terminal and type in `vimtutor`

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
> If you are going to be using Vim / Tmux now, there are some basic defaults you
> will want to get set up such as copy paste support, color themes, etc.

1. First off, I suggest that if you have a Mac you use Thoughtbot's "laptop" setup
which puts together some sensible defaults AND installs a ton of great apps for
developing in Ruby. They have a [script that does that on github]( https://github.com/thoughtbot/laptop ).

2. Once you have everything set up (or just skip to this step), you can [take a look
at their dotfiles.](https://github.com/thoughtbot/dotfiles) They have everything structured so that you add your own "local"
changes to files appended with .local. I have followed this convention, just in
case they update their repo in the future I can stay current without running
into problems.

3. On a Mac, download iTerm2. This is MUCH better than the standard
   terminal.app. This will make it much easier to get the color scheme set up
also.

### Customize
> I recommend keeping your vimrc and plugins as light as possible while
>    learning, and upgrade one thing at a time so that you are SURE to know what
> you are doing. **Here are my [ my dotfiles
> ](https://github.com/colbycheeze/dotfiles)**.

That said, there ARE some important changes you should make in my opinion. 
######The big ones for me were:

  * [ NERDTree plugin ](https://github.com/scrooloose/nerdtree) for viewing directory structure

```vim
" Map ctrl+n to toggle NERDTree
map <C-n> :NERDTreeToggle<cr>
nnoremap <C-t> :call NumberToggle()<cr>
```

  * Enable mouse for Tmux and Vim

```vim
"Allow usage of mouse in iTerm
set ttyfast
set mouse=a
set ttymouse=xterm2
```

  * Get copy and paste working between the system clipboard and Vim/Tmux.

```vim
"F2 before pasting to preserve indentation
set pastetoggle=<F2> 

"Ctrl+c in visual mode sends selection to clipboard
vnoremap <C-c> "*y 
```

  * Easier nav between Tmux and Vim splits. [Instructions](
http://robots.thoughtbot.com/seamlessly-navigate-vim-and-tmux-splits)

Once you have things set up, make sure to  use [RCM](https://github.com/thoughtbot/rcm) to keep your dotfiles updated. I recommend
checking it out, as it would really suck to lose your local files and not have
backup!

### Level Up!
> Now that you have a solid base, it's time to level up further by customizing and
> extending your setup. At this point, the sky is the limit. Here are some great
> ideas for what to try next.

* This is a great [ list of plugins ](http://www.bestofvim.com/plugin/) to check out
* Read the book [Learn Vimscript the hard
  way](http://learnvimscriptthehardway.stevelosh.com/)
* Watch these [ awesome talks ](http://confreaks.tv/presenters/ben-orenstein) by Ben Orenstein




