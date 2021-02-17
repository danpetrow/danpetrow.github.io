---
layout: post
author: dan
permalink: /:title/
---
Yesterday I sent about four hours trying to figure out why Jekyll wouldn't run. Here is what I learned for next time. 

Ruby -v
You can uninstall the whole Ruby language but files are left behind really.
bundle update
You can delete your gemfile and gemfile.lock if you accidentally run this and get in a bad state.
gem uninstall -a
This will uninstall all of the gems currently installed.

Once you are free from your previous errors and are running fresh you can jump to here.

bundle init 
Creates a new gemfile in the working directory.
bundle add jekyll
Creates your gemfile.lock with most of your dependencies(the gems you need to install)
bundle install
install the gems you need
group :jekyll_plugins do
  gem 'jekyll-sitemap'
  gem 'jekyll-feed'
  gem 'jekyll-seo-tag'
end
Add you plugins to gemfile
gem "webrick"
Add webrick to your gemfile

You should be good to go after this.

Don't mess with bundle update if things are working maybe?