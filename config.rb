Time.zone = "US/Central"

page "CNAME", layout: false
page "index.html", layout: false
page "/feed.xml", layout: false
page "/demos/*", layout: false
page "/blog/*", layout: "blog"
# page "/about.html", layout: "blog"

set :relative_links, true
activate :directory_indexes

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true,
               :tables => true,
               :smartypants => true,
               :autolink => true,
               :highlight => true,
               :with_toc_data => true

activate :syntax

# Use git to deploy for gh pages
activate :deploy do |deploy|
  deploy.method = :git
  deploy.build_before = true
end

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.prefix = "blog"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"
  blog.permalink = "/{year}/{month}/{title}.html"

  blog.paginate = true
  blog.page_link = "p{num}"
  blog.per_page = 15
end

activate :google_analytics do |ga|
  ga.tracking_id = 'UA-16038536-1'
end

configure :development do
  activate :livereload

  activate :disqus do |d|
    d.shortname = 'devcolbycheeze'
  end
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

   activate :disqus do |d|
     d.shortname = 'colbycheeze'
   end
end

helpers do
  def month_to_name num
    months = [nil, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    months[num]
  end
end
