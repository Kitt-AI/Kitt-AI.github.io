---
layout: post
category : productivity
title: "Make Sphinx Autodoc Watch Docstring Changes.md"
tagline: "with watchdog and LivePage"
tags : [sphinx, python, docstring]

---
{% include JB/setup %}

When writing Python docstrings, one often wants to see the HTML rendered immediately. That is, the following process should be automated:

1. write docstring in your .py file
2. doc builder detects file change, renders new HTML
3. browser reloads HTML

One neat solution is [pdoc](https://github.com/BurntSushi/pdoc). But if you are using
[Sphinx](http://sphinx-doc.org) with its [autodoc](http://sphinx-doc.org/ext/autodoc.html) extension, then there is not so much of automation here (despite the name *auto* in autodoc).

One quick solution is:

1. write docstring in your .py file (sadly this can't be automated *yet*)
2. doc builder detects file change, renders new HTML **with [watchdog](https://pypi.python.org/pypi/watchdog)**
3. browser reloads HTML **with [LivePage](https://github.com/MikeRogers0/LivePage) Chrome extension**

## watchdog

Using watchdog is very easy:

<pre>
$ pip install watchdog
</pre>

Then go to your Sphinx folder and execute:

<pre>
$ watchmedo shell-command --patterns="*.py" --command='make html' your_python_source_folder
</pre>

The command basically watches all `*.py` file changes in `your_python_source_folder` and run `make html` in your Sphinx folder upon file change.

## LivePage

The [LivePage](https://github.com/MikeRogers0/LivePage) Chrome extension is a developer tool to automatically reload web pages once files are changed on the *server* side. To enable reloading on *local* file change, you need to give additional permissions once installed. That is, go to `chrome://extensions/` and click on "Allow access to file URLs":

<img src="/assets/img/posts/LivePageFilePermission.png" class="img-responsive" alt="LivePage file permission"/>

Then we are all set!

## Demo

Here in this demo we did a few things in sequel:

1. enabled the LivePage button on the top right of the *browser* (top middle of the screen);
2. started watchdog command in the terminal;
3. made some changes in the docstring of .py source;
4. webpage automatically refreshed.

<img src="/assets/img/posts/sphix-auto-docstring.gif" class="img-responsive" alt="Automating Sphinx Docstring Generation and View"/>
