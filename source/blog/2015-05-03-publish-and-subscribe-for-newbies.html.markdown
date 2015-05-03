---
title: Publish and Subscribe for Newbies
date: 2015-05-03 10:49 CDT
tags: Meteor, tutorial
---

In the beginning, learning Meteor is fairly simple as all of your data stored in collections just shows up by default. This is great for getting started, but as you begin building out apps correctly you notice that it is recommended to turn off this feature. 

`meteor remove autopublish`

Learning "pubs/subs" (Publish and Subscribe) in Meteor can be a bit confusing at first, especially if you have never worked with MongoDB before. **It was for me!** No worries though, as I plan to demystify that for you today. READMORE

### Where did all of the data go?
So, after removing autopublish you may be wondering why you are no longer getting any data. What has happened is the server is no longer giving any data back to the client, even when you ask for it with a query.

A query on something that doesn't exist will return nothing! This is where the idea of pubs and subs comes in.

![Confused?](http://41.media.tumblr.com/9ca3fbecd133936a1ac90145855761ac/tumblr_ngatqfQQ2M1rgcqrbo1_1280.png)

Now we have to explicitly 'subscribe' to specific information from the client side, while the server has to explicitly 'publish' the information we are allowed to see.

### So why even remove autopublish?
With autopublish, the server holding the data just hands over to the client the entire database. Think of it as a giant bucket of data, and when the client needs something the server says, "Here you go. Take what you need from this giant bucket."

Now, you can only imagine how bad of idea this would be if this bucket was filled with thousands upon thousands of pieces of data. This could cause some serious performance issues, not to mention exposing EVERYONE's data to the client.

 Obviously, we need a better way to give only the relevant data. There is no point in getting information that we won't use, or **shouldn't** be allowed to use. The thing to keep in mind is that you always want just the minimal amount of data necessary.

In other words if I'm looking at a blog post from a user, do I really need to have access to ALL of that user's blog posts? Nope! Also, this plays into things like pagination as well. If there are 500 comments, I probably only need to have access to the first 25 or so right?

![Too Much Data](http://www.zerohedge.com/sites/default/files/images/user3303/imageroot/2014/11-overflow/20141122_ice.jpg)

### How we should really be doing it.
Now that you understand the why, let's look at what the correct way to publish and subscribe to data looks like. For the rest of this article, let's pretend we are developing an app to connect to a store's list of products.

```javascript
//shared > collections.js
Products = new Mongo.Collection('products');
```

Even with `autopublish` removed, it is easy to give out way too much information. A simple example of potentially giving out way too much data would be:

```javascript
//server > publications.js
Meteor.publish('products', function () { return Products.find(); });
```
As you can see, even with removing `autopublish` we are still giving the entire database of products here. What we should do instead is take into consideration the minimum amount of data the client will need.

This is the part that really does vary based on the situation, but let's assume the user is searching for PS4 games on a site like Amazon. ![Amazon Example](http://i.gyazo.com/6dfff56a821da88b28b8db6c1da1de06.png)

For this use case, we can return items based on Category (Video Games), Subcategory (PS4), and then give back a list of 'the newest' items by default.

```javascript
//server > publications.js
Meteor.publish('products', function (category, subcategory) {
  return Products.find ({ category: category, subcategory: subcategory },
    { $limit: 5, $sort: -1, $fields: { title: 1, thumbnail: 1,
                                       price: 1, shortDescription: 1 }
    });
});

// client > views > featured_games.js
Template.FeaturedGames.onCreated(function() {
  this.subscribe('products', 'Video Games', 'PS4');
});

```

So, with this simple example you can see we are now greatly limiting the amount of data returned. Not only are we narrowing down based on various criteria, we also have asked for specific fields of data since it is also possible to have a vast amount of unnecessary fields, which in this case isn't needed for displaying basic info.

### Well, there you have it!

Hopefully that makes pub/sub a little bit more understandable for you. Again there are a lot of use cases I am not covering and various ways of doing things. For now, I really suggest at least glancing over the following sections of the Docs:

  * [Meteor.publish](http://docs.meteor.com/#/full/meteor_publish)
  * [Meteor.subscribe](http://docs.meteor.com/#/full/meteor_subscribe)
  * [template.subscribe](http://docs.meteor.com/#/full/Blaze-TemplateInstance-subscribe)
  * [collection.find](http://docs.meteor.com/#/full/find)

Sacha from Discover Meteor also wrote a [really in depth article](https://www.discovermeteor.com/blog/understanding-meteor-publications-and-subscriptions/) about this topic that you may want to check out.  

**Still confused?** The best way to learn is to [build things](http://www.colbycheeze.com/blog/2015/04/4-simple-strategies-to-come-up-with-project-ideas-for-learning-to-code.html), so get out there and begin coding!


