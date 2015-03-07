desc "Commit and push changes to Github"
task :push, [:msg] do |t, args|
  puts "## Adding all files (git add .)"
  system("git add .")

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

