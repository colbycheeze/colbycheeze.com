---
title: May Site Redesign Breakdown
date: 2015-06-02 06:30 CDT
tags: design, middleman, html, css
---

During the beginning of May I decided to focus on getting better at design as a whole, so I began to REALLY take a hard look at great looking websites for inspiration in addition to working my way through [Hack Design](https://hackdesign.org/). I decided my website was absolute crap and needed some work, so here is the progress that I made during that time. READMORE

## Responsive Design

So this was the big one. I wanted my website to look great on phone, tablet, laptop, and desktop so therefore I worked hard to get that experience nailed down.  I started by working on the navbar and building in some code which created a sidebar on smaller screens.

![Responsive Navbar](http://cheeze-blog-images.s3.amazonaws.com/responsive-navbar.png)

Next up was dealing with the sidebar, which would be really odd for smaller screens, so I forced it to the bottom on smaller sizes.

![Responsive Widgets](http://cheeze-blog-images.s3.amazonaws.com/sidebar-widgets-at-bottom.png)

Moving content around is one thing, but as I read more and more about typography I realized that my font sucked. I decided to go with a heading/body combo of **Roboto** and **Open Sans**

Not only did I not like my font face that I was using, but I also wanted the text itself to be responsive.
I learned that as the screen size shrinks you can change line height, size, and spacing for smaller screens as tablets and phones will be held closer to the user's eyes.

Materialize framework has a way of dealing with this called "Flow Text." Since I'm not using that, I just manually adjusted the text sizing at various breakpoints. The idea being that you want between 50-80 characters on a line for optimal human readable text.

```css
body {
  font-size: $base-font-size;

  @include media($tablet-only) {
    font-size: $base-font-size * 0.9;
  }
  @include media($mobile-only) {
    font-size: $base-font-size * 0.7;
  }

  line-height: $base-line-height;

  @include media($tablet-only) {
    line-height: $base-line-height * 0.9;
  }
  @include media($mobile-only) {
    line-height: $base-line-height * 0.7;
  }
}
```

I noticed that a lot of websites actually VIOLATE this rule and you can clearly tell it is much more annoying to read articles on these sites. The funny thing is that many of them LOOK amazing, but the reading experience itself sucks.

I decided to make my reading experience great, because that's what people are here for!

#### Text on large screens
![Text on Large screens](http://cheeze-blog-images.s3.amazonaws.com/text_on_large.png)

#### Text on small screens
![Text on small screens](http://cheeze-blog-images.s3.amazonaws.com/Text_on_small_screens.png)

## Animations
Animations are fun! I did my best to add in some spiffy animations to help with the jarring page flash on transition / page load. What I learned is that animations can REALLY be done wrong. The idea is that you want them to be somewhere in the range of 300ms, and DEFINITELY no longer than 1 second. Our eyes move in saccades and can process 3 saccades per second (hence the 300ms)

That said, here is what I came up with (which will look much better if you refresh your page).
![Page Transition Animations](http://cheeze-blog-images.s3.amazonaws.com/page_load_transition.gif)

## Some final touches
So for some extra detail here and there I have a couple of changes that I feel improved the overall experience.

I converted several pieces of text to Font Awesome icons, such as the post meta, as well as the social media icons.

Posts now also have sharing links so you can easily send them to friends.

After reading through the Google design specs, I decided to touch up my shadows and make them more "Material" like. I actually came up with a two part shadow to accomplish this, and stuck to the 5 level approach, such that the content is 1 level up, and the navbar would be at level 2 in height.

And finally, I wanted to make that background look a bit better so I chose to use a textured approach.

If you want to see the previous iterations of how I've built my website, be sure to check out the previous recaps in the article, [Building my Middleman Blog](../02/building-my-middleman-blog.html)
