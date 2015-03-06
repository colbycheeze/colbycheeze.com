desc "Commit and push changes to Github"
task :push, [:msg] do |t, args|
  puts "## Adding all files: "
  system("git add .")

  puts "## Committing changes: "
  system("git commit -m #{args.msg}")

  puts "## Pushing to Github: "
  system("git push")
end

desc "Build Blog"
task :build do
  puts "## Building website"
  status = system("middleman build --clean")
  puts status ? "OK" : "FAILED"
end

desc "Deploy website"
task :deploy do
  puts "## Deploying website"
  status = system("middleman deploy")
  puts status ? "OK" : "FAILED"
end

desc "One Line deploy"
task :default => [:push, :build, :deploy] do
end
