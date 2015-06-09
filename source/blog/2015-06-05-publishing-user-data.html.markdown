---
title: Publishing User Data
date: 2015-06-05 06:04 CDT
tags: security, meteor, publications
published: false
---

In Meteor, you will always receive the information for the current logged in user, but what happens when you want to display information from other users such as avatar images, names, or other profile specific info? READMORE

This isn't immediately obvious with Meteor, and my own confusion when first trying to do this is the reason I'm writing this post.

There are several ways of obtaining the information for non-logged in users, however you also have to consider a few security and privacy issues along the way which are very important.

You need to keep in mind that it is important to only publish the very minimal amount of information necessary to achieve your desired result.

Let's start by asking for the user's profile. First we have to actually create a publication for this.

##### Publishing user data is as simple as...
```javascript
Meteor.publish('userData', function () {
  return Meteor.users.find();
});
```

![Publishing too much data](http://cheeze-blog-images.s3.amazonaws.com/Publish_private_data.png)

==Whoa, Danger!== We definitely don't want to be publishing everyone's password hash, email, and whatever other personal info that our app may be storing!

Let's try that again. This time we need to be specific with what we need. For that we can pass in a `fields` object to our publication.

##### The right way
```javascript
Meteor.publish('userData', function () {
  return Meteor.users.find({}, {fields: {profile: 1}});
});
```

Ah yes, much better. Now all we will receive is the `_id` and the data within their profile.

Another cool trick that I didn't know when first starting, is that you can drill down further and ask for specific fields within the profile by using a string, such as: `{fields: {'profile.specificData': 1}}`

### Bonus round!
Alright, so what happens if you need to display a Gravatar image which requires the user's e-mail? You COULD publish the `'services.emails'` field, but that is a no-no also. Not everybody wants their e-mail to be public.

#####Well there are two options here:
  1. We store a hash of the e-mail, which can then be sent to the API
  2. We take care of the API call on user creation, and store the actual Gravatar URL in the profile.

Well, I'd have to say **BINGO!** with number 2. That's the "Mongo" way. Denormalization as they call it. This also reduces the load times because we aren't making dozens of API calls to Gravatar each time our page loads up.

One thing to keep in mind, is that you may have to create a hook that updates that gravatar url when the e-mail changes. Sacha, the author of Discover Meteor, recently wrote an amazing article about collection hooks and denormalization which you can [read on his blog here](https://www.discovermeteor.com/blog/a-look-at-meteor-collection-hooks/).

Okay, so here is the snippet of code that can handle converting not only a generic e-mail login into an Avatar, but also handle a Google login. This could be extended to other services as well of course.

```javascript
Accounts.onCreateUser(function(options, user) {
  var attachData, email, picture, profileImageUrl, profilePicture, url, service, allEmails, firstEmail;
  profileImageUrl = undefined;
  user.profile = user.profile || {};

  //If the google service exists
  if ((service = user.services) !== undefined ? service.google : undefined) {
    user.emails = [
      {
        address: user.services.google.email,
        verified: true
      }
    ];
    user.profile.firstName = user.services.google.given_name;
    user.profile.lastName = user.services.google.family_name;
    user.profile.avatar = user.services.google.picture;
  }

  //No avatar defined from Google service? Okay let's get a Gravatar
  if (!user.profile.avatar) {
    email = ((allEmails = user.emails) !== undefined ? (firstEmail = allEmails[0]) !== undefined ? firstEmail.address : undefined : undefined) || '';
    url = Gravatar.imageUrl(Gravatar.hash(email));
    user.profile = { avatar: url };
  }
  return user;
});
```

So that's it! Want to learn more gotchas around Meteor security? Josh Owens has a great set of posts that really dives into this topic that I suggest you [check out on his blog here](http://joshowens.me/meteor-security-201/).
