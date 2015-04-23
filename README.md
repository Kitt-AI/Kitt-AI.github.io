# Jekyll + Bootstrap For Startups

What a small startup usually needs (and this repository's current dev stage):

- A single responsive landing page (done, e.g.: your.domain)
- A blogging platform (in progress, e.g., your.domain/blog)
- Several product pages (future, e.g., your.domain/product)

This repository uses:

- [Jekyll](http://jekyllrb.com)
- [Twitter Bootstrap 3](http://getbootstrap.com/)
- Plain HTML and CSS. No fancy Sass or LESS.

It is heavily influenced by:

- [Jekyll Bootstrap theme](https://github.com/swcool/landing-page-theme)
- [Jekyll-Bootstrap](https://github.com/plusjade/jekyll-bootstrap)


## Quick Start

```sh
$ git clone https://github.com/Kitt-AI/Kitt-AI.github.io USERNAME.github.com
$ cd USERNAME.github.com
$ git remote set-url origin git@github.com:USERNAME/USERNAME.github.com.git
$ # Do your edit, then:
$ bundle exec jekyll serve
$ git push origin master  
```

*Before* pushing to github, run to make sure your website looks good locally:

```sh
$ bundle exec jekyll serve
```
Because Github uses the same command to publish your pages ([source](https://help.github.com/articles/using-jekyll-with-pages/)).

## Walkthrough

Directory structures:

```
├── 404.html                     # Be creative!
├── CNAME                        # If you have a customized domain name
├── Gemfile                      # sync 'github-pages' with Github
├── README.md                    # this file, edited off dillinger.io or stackedit.io
├── _config.yml                  # main Jekyll config
├── _includes                    # HTML templates for your posts/pages
│   ├── JB                       # scripts stolen from Jekyll-Bootstrap
│   │   ├── analytics            # Webpage analytics, supported providers are:
│   │   ├── analytics-providers
│   │   │   ├── getclicky
│   │   │   ├── google
│   │   │   ├── mixpanel
│   │   │   └── piwik
│   │   ├── categories_list      # Generate blog categories
│   │   ├── comments             # Blog commenting system, from:
│   │   ├── comments-providers
│   │   │   ├── disqus
│   │   │   ├── facebook
│   │   │   ├── intensedebate
│   │   │   └── livefyre
│   │   ├── file_exists          # If check failed, then 404
│   │   ├── gist                 # Include Github gist in blog
│   │   ├── is_production        # If not, don't add analytics
│   │   ├── liquid_raw           # Display raw liquid code
│   │   ├── pages_list           # Generate list of pages for blog
│   │   ├── posts_collate
│   │   ├── setup
│   │   ├── sharing
│   │   ├── sort_collection
│   │   └── tags_list
│   ├── footer.html              # footer templates shared across pages
│   ├── head.html
│   ├── js.html
│   ├── landing_page             # landing page specific templates
│   │   ├── about.html
│   │   ├── contact.html
│   │   ├── home.html
│   │   └── products.html
│   ├── nav.html                 # nav bar
│   └── posts                    # blog specific templates
│       ├── body.html
│       ├── index.html
│       └── nav.html
├── _layouts
│   ├── blog.html
│   ├── landing.html
│   └── post.html
├── _posts                       # blog posts
│   ├── 2011-12-29-jekyll-introduction.md
│   ├── 2015-4-13-again-intro.md
│   └── 2015-4-15-test3.md
├── archive.html
├── assets
│   ├── css
│   │   ├── bootstrap.min.css
│   │   └── landing-page.css    # customize your css
│   ├── font-awesome-4.3.0
│   ├── fonts
│   ├── img                     # put your images here
│   │   ├── 404-page-on-blue.png
│   │   ├── blue-icon-120.png
│   │   ├── blue-icon-152.png
│   │   ├── blue-icon-16.ico
│   │   ├── blue-icon-32.ico
│   │   ├── blue-icon-60.png
│   │   ├── blue-icon-76.png
│   │   ├── blue-logo-small.png
│   │   ├── blue-on-sky-gray.png
│   │   ├── products
│   │   │   ├── k2.png
│   │   │   ├── microwave.png
│   │   │   └── snowboy.png
│   │   └── white-logo.png
│   └── js
│       ├── bootstrap.js
│       ├── bootstrap.min.js
│       ├── jquery-1.11.0.js
│       ├── jquery.easing.min.js
│       └── landing-page.js     # customize your javascript
├── atom.xml
├── blog                        # index.html for your.domain/blog
│   └── index.html
├── categories.html
├── index.md                    # index.html for landing page
├── pages.html                  # blog page list
├── rss.xml
├── sitemap.txt
└── tags.html
```
Dev cycle:

1. run `jekyll serve`, this watches local file changes, but *not* `_config.yml`
2. configure your own `_config.yml`
    * remember to remove kitt.ai's disqus/analytics tokens
    * everytime `_config.yml` is changed, `jekyll serve` has to be re-run.
3. Edit the following files:
    * `_include/*`: your HTML templates
    * `_layouts/*`: your layout definition
    * `assets/img`
    * `assets/js/landing-page.js`
    * `assets/css/landing-page.css`
    * `blog/index.html`: layout of your.domain/blog front page

There are three layouts:

1. blog (`_layouts/blog.html`): used for blog front page, archive, etc
2. post (`_layouts/post.html`): used for blog posts
3. landing (`_layouts/landing.html`): used for your landing front page

## TODO

* code clean up and refactoring
* complete blog system
* (longer term) build product pages ([maybe](https://github.com/mistic100/jekyll-bootstrap-doc))

## License
The contents of this repository are licensed under the [Apache
2.0](http://www.apache.org/licenses/LICENSE-2.0.html).