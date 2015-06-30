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
$ git commit -am 'my edit'
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
│   ├── posts_nav.html           # nav bar for blog
├── _layouts
│   ├── default.html
│   ├── page.html
│   ├── landing.html
│   └── post.html
├── _posts                       # blog posts
│   ├── 2015-4-13-question-answering.md
│   ├── 2015-4-15-hotword-detection.md
│   └── 2015-4-15-semantic-parsing.md
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
├── blog                        # index.html for your.domain/blog
│   └── index.html
├── categories.html
├── index.md                    # index.html for landing page
├── pages.html                  # blog page list
├── rss.xml
├── sitemap.xml
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

1. page (`_layouts/page.html`): used for blog front page, archive, etc
2. post (`_layouts/post.html`): used for blog posts
3. landing (`_layouts/landing.html`): used for your landing front page

## Product page

Product pages are served at `PRODUCT`.kitt.ai. However, Github/Jekyll only allows to publish at kitt.ai/`PRODUCT`. The solution is:

1. Initiate another reppository called `PRODUCT`
2. build a `gh-pages` branch and push an `index.html`
3. push `CNAME` with content: `PRODUCT.kitt.ai`
4. set a CNAME record on your domain provider site pointing `PRODUCT.kitt.ai` to `USER.github.io` (*note*: **not** `USER.github.io/PRODUCT` with the subdirectory name
 
Above is standard Github procedures, official docs are [here](https://help.github.com/categories/github-pages-basics/).

Now comes the tricky part: *how to make `PRODUCT.kitt.ai` share the same templates & theme with `kitt.ai` main site?*

Solution One: write a MAKE file to `rsync` both repositories -- very easy to make mistakes!

Better solution: only use the subdomain and its repository as `index.html` holder but server most content from the main site.

1. on the main site (this repository), build the product page with subdirectory file `PRODUCT/index.html`.
2. it'll server from `kitt.ai/PRODUCT`
3. on the subdomain repository's `gh-pages` branch (`https://github.com/USER/PRODUCT`): ``wget kitt.ai/PRODUCT -O index.html`
4. fix relative path (e.g., "/assets/..") for resources (js/ico/css etc) to absolute path (e.g., "http://kitt.ai/assets/..").
  - In this way we are serving *everything except `index.html`* from the main site, so the themes are shared!
  - fixing the path is easy, just used `sed -i 's/old/new/g' index.html` in-place replacement
5. `git commit` and `push` to update
6. your project is served identically at both `PRODUCT.kitt.ai` and `kitt.ai/PRODUCT`. Don't like the latter one? Simple remove it.

Sample exaple: [tweetbulb.kitt.ai](http://tweetbulb.kitt.ai) ([code](https://github.com/Kitt-AI/tweetbulb)).

## TODO

* complete blog system
* ~~code clean up and refactoring~~
* ~~(longer term) build product pages~~

## License
The contents of this repository are licensed under the [Apache
2.0](http://www.apache.org/licenses/LICENSE-2.0.html).
