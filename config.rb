page "CNAME", layout: false

set :relative_links, true
activate :directory_indexes

# set :markdown_engine, :kramdown

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true,
    :tables => true,
    :smartypants => true,
    :autolink => true

activate :syntax, line_numbers: true

activate :deploy do |deploy|
  deploy.method = :git
  deploy.build_before = true
end

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.prefix = "blog"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"
end

page "/feed.xml", layout: false
page "/blog/*", layout:  "blog"

configure :development do
  activate :livereload
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
   #For example, change the Compass output style for deployment
   activate :minify_css

   #Minify Javascript on build
   activate :minify_javascript

   #Enable cache buster
   activate :asset_hash

   #Use relative URLs
   activate :relative_assets
end
