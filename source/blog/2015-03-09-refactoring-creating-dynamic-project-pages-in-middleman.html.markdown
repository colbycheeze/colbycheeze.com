---
title: Refactoring - Creating dynamic project pages in Middleman
date: 2015-03-09 08:02 CDT
tags: Middleman, Refactoring
---

When building static sites it is easy to get into the mindset of just writing
out content as fast as you can, however in some cases you will find that you can
apply the DRY principle to clean things up nicely.  READMORE

When I set out to build my porfolio page, I just began listing all of the
projects I had done in a card view. Everything worked out, but it very quickly
got out of hand as I added more. I realized if I ever wanted to make a change or
add new content it would be a huge pain.

##### Here is what the code looks like in it's current messy state

```erb
#portfolio.html.erb

<h4 class="line-behind">Large Projects / Games</h4>

<ul class="cards">
  <li class="card">
    <div class="card-image">
      <img src="http://i.gyazo.com/9082655def65b163f4066fbbb9bfe0c7.png" />
    </div>
    <div class="card-header">
      <%= link_to "CheeZeWorld.com", "http://web.archive.org/web/20121105211113/http://cheezeworld.com/" %></div>
    <div class="card-copy">
      My original programming blog which was quite popular and had an active community following my open source projects.
    </div>
  </li>
# ... and repeated multiple times for each project card
</ul>
```

So, let's begin the process of cleaning this up. I'll start by checking out a
feature branch. `git checkout -b dynamic-portfolio`

The idea would be to use Middleman's local data feature to create a "database"
of sorts for all of these projects. The items that are being repeated are just
the name, image link, url, and description so that is what I'll structure into
the YAML file.

##### So here is what I created for the YAML. 

```yml
#data/projects.yaml

category:
  - name: Large Projects / Games
    project:
      - name: CheeZeWorld.com
        description: My original programming blog which was quite popular and had an active community following my open source projects
        image: http://i.gyazo.com/9082655def65b163f4066fbbb9bfe0c7.png
        url: http://web.archive.org/web/20121105211113/http://cheezeworld.com/
      - name: Dance Dome
        description: Dance Battle game commissioned by MTV for America's Best Dance Crew featuring a full 2D skeleton animation system
        image: http://i.gyazo.com/99f4b5adaa462083b757a5b4eaf7ae85.gif
        url: http://www.mtv.com/games/arcade/game/play.jhtml?arcadeGameId=10158535

# and so on...
```
The information here is much easier to read and update now, rather than sifting
through nasty html markup for our content data.

Next, we have to create a template which will read in the data from our YAML and
dynamically outkut the markup. Easiest thing to do is here once you have your
data filled out in the YAML is to delete all but one project card and it's section header,
then we can start replacing with the dynamic code.

##### And, with a few simple each statements...wala!

```erb
#portfolio.html.erb

<% data.projects.category.each do |category| %>
  <h4 class="line-behind"><%= category.name %></h4>
  <ul class="cards">

    <% category.project.each do |project| %>

      <li class="card">
        <a  href="<%= project.url %>">
          <div class="card-image">
            <%= image_tag project.image %>
          </div>
          <div class="card-header">
            <%= project.name %>
          </div>
          <div class="card-copy">
            <%= project.description %>
          </div>
        </a>
      </li>

    <% end %>
  </ul>
<% end %>
```

This is SO much better than constant copy pasting, and it makes updating in
the future extremely simple as well. If I need to update the HTML or data, it is
much less likely that I will break things.

##### The final result:
![Portfolio Page](http://i.gyazo.com/f7a601e593291d0a7a63f55aa6afb62d.png)

All that is left is to merge the branch and push it up to live! Going forward,
if I want to make individual pages for each project that will be easy using a
dynamic method like this as well, and I can reuse the data. So as always, **D**on't **R**epeat **Y**ourself!




