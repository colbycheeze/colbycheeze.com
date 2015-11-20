desc "Add and commit any changes made"
task :commit, [:msg] do |t, args|
  puts "## Adding all files (git add .)"
  system("git add .")

  commit_msg = args.to_a.join(', ')
  puts "## Committing chgnges (git commit -m '#{commit_msg}')"
  system("git commit -m '#{commit_msg}'")
end

desc "pushes up all staged changes"
task :push do
  puts "## Pushing to Github (git push)"
  system("git push")
end

desc "Build Blog"
task :build do
  puts "## Building website (middleman build --clean)"
  status = system("bundle exec middleman build --clean")
  puts status ? "OK" : "FAILED"
end

desc "Deploy website with Middleman Deploy"
task :deploy do
  puts "## Deploying website to github pages (middleman deploy)"
  status = system("bundle exec middleman deploy")
  puts status ? "OK" : "FAILED"
end

desc "One Line deploy"
task :go, [:msg] => [:commit, :push, :build, :deploy] do |t, args|
end

desc "Starts up the Middleman Server"
task :serve do
  puts "## Starting Middleman (bundle exec middleman)"
  status = system("bundle exec middleman")
  puts status ? "OK" : "FAILED"
end

desc "Default, just start up the server"
task :default => [:serve]

