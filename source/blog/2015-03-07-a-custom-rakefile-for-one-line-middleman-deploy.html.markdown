---
title: A Custom Rakefile for One Line Middleman Deploy
date: 2015-03-07 11:20 CST
tags: Workflow, Middleman
---

So one of my big things when working is that I am always concious of when I am
repeating myself. I try to write down repeated actions, and look for ways to
reduce them. While working on my Middleman website, I find that I am often
repeating the same 5 steps over and over. READMORE

1. `git add .`
2. `git commit -m "some update" `
3. `git push`
4. `middleman build`
5. `middleman deploy`

Not only do I have to type all of that each time I want to update, but I have to
wait for the process in between which can take a few seconds. Needless to say,
this can get old quick.

### Enter the solution: Rakefile
```ruby
desc "Commit and push changes to Github"
task :push, [:msg] do |t, args|
  puts "## Adding all files (git add .)"
  system("git add .")

  # Handle commas in commit messages
  commit_msg = args.to_a.join(', ')
  puts "## Committing chgnges (git commit -m '#{commit_msg}')"
  system("git commit -m '#{commit_msg}'")

  puts "## Pushing to Github (git push)"
  system("git push")
end

desc "Build Blog"
task :build do
  puts "## Building website (middleman build --clean)"
  status = system("middleman build --clean")
  puts status ? "OK" : "FAILED"
end

desc "Deploy website"
task :deploy do
  puts "## Deploying website (middleman deploy)"
  status = system("middleman deploy")
  puts status ? "OK" : "FAILED"
end

desc "One Line deploy"
task :go, [:msg] => [:push, :build, :deploy] do |t, args|
end
```

Now all I do is type `rake go["much easier updates"]`

I've split up the functions as well, in case all I want to do is push to Github
or do a local build. Anyhow, hope you get some ideas for your own projects in
Middleman or Rails. If you like the idea, check out the [ official documentation ](https://github.com/ruby/rake)
to learn more.
