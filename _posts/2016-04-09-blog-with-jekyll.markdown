---
title:  "Blog With Jekyll"
date:   2016-04-08
image: "/jekyll-blog/header.png"
---
Jekyll is a static site generator that is written in ruby. Jekyll takes text files and renders them into HTML page. If you are looking for a simple web page or blog without having a database or maintaining a lot of code then Jekyll is for you. Another bonus for Jekyll is that you can host your page on GitHub pages.

<br/>

### Installation

Installing Jekyll is just like installing any ruby gem. If you are on windows you will need to get ruby so check out [ruby installer][ruby-installer]. I will be installing on a mac but for further information on how to install look at the [Jekyll docs][jekyll-docs]. In your console type `gem install jekyll` and wait till it installs (restart your console after). If installed successfully it will say `Successfully installed jekyll-version#` and to double check installation type `jekyll –v`.

<figure>
  <img src="/img/posts/jekyll-blog/jekyll-install.png" class="blg-img" alt="command line install">
</figure>

<br/>

### Creating a New Project

Creating a new project is just as easy as installing (I hope it is for you). To create a new project in the command line at whatever root directory you want (I did mine on desktop for demo purposes) type `jekyll new your-project-name` ex:`jekyll new stocks`.


<br/>

#### Viewing the files created here is a rundown of what the file/folders do:
<ul class="blg-lists">
  <li>config.yml – is where you can configure all the configuration data</li>
  <li>_includes – contains partials which can be reused and rendered in html templates in layouts</li>
  <li>_layouts – contains main page templates such as for a blog post or homepage</li>
  <li>_posts – contains markdown files for blog posts. If you don’t know markdown here is a cheat sheet and an environment you can practice in.</li>
  <li>_sass – is a scripting language for css to make things more efficient and jekyll offers this.</li>
  <li>css – contains the main stylesheet that is in Sass but if you just want to use plain css you can rename main.scss to main.css.</li>
</ul>

<figure>
  <img src="/img/posts/jekyll-blog/prj-files.png" class="blg-img" alt="list of project files">
</figure>

<br/>

In order to view the webpage it needs to be hosted on a server and Jekyll provides one for us through the command line. Navigate to the root folder of the project and type `jekyll serve`.  Once server is running copy the server address (2nd to last line) and paste it in your browser and whala! You now have a website. If you look at your project folder you will see a new folder that was created called _site. This is where the site’s assets will be placed and what you will need to host the page on a webserver. One important thing to remember is that folders beginning with an underscore will be compiled but will not be copied over to the _site folder. If you want other assets like videos, images or sounds make sure the folder does not start with an underscore.

<figure>
  <img src="/img/posts/jekyll-blog/jekyll-server.png" class="blg-img" alt="jekyll server in command line">
</figure>

<figure>
  <img src="/img/posts/jekyll-blog/live-site.png" class="blg-img" alt="Live site files">
</figure>

<figure>
  <img src="/img/posts/jekyll-blog/website.png" class="blg-img" alt="Default live site">
</figure>

<br/>

### Configure Project

To configure your project you will have to edit the `_config.yml` file. The [Jekyll documentation][jekyll-documentation] provides a full list of commands that can be configured. Go through and give your site/blog a title, email, and description. Set the url to the host domain name you will use to host the live site on and you can also set your twitter/github usernames if you want. There is one more configuration we need to manually add under build settings called [permalink][permalink-link] and it defines how the file path is displayed. View the docs for a selection of built in settings but I like either none or /: categories/:title. Type `permalink: none`or the custom permalink `/:categories/:title` restart your server.

<br>

{% highlight YAML linenos %}
# Site settings
title: Stocks
email: stocks@domain.com
description: A blog about my opinions and anaylsis of stocks and whether they are worth buying or selling.
baseurl: "" # the subpath of your site, e.g. /blog
url: "http://pratikmshah.github.io" # the base hostname & protocol for your site
twitter_username: pratikshah
github_username:  pratikmshah
{% endhighlight %}

<br>

<figure>
  <img src="/img/posts/jekyll-blog/permalink.png" class="blg-img" alt="permalink">
</figure>

<br/>

### Yaml

In your text editor go to your posts and look at the sample markdown file. You will notice a block of text between the dashes. This is called a yaml (ya-mull) front matter and its basically creating and assigning variables to be used within the file. Change the title value to whatever you want your post title to be. The date variable is what Jekyll uses to sort your blog posts in order and it can be changed if you would like. You can also specify categories for your post; for multiple categories use spaces. You can also add an author by adding an `author: name` in the yaml front matter. After that you can get rid of all the default content and place one of your own. I am going to use a lorem ipsum generator to fill in my content. Save once you are done and have a look at your post.

<figure>
  <img src="/img/posts/jekyll-blog/yaml-front-matter.png" class="blg-img" alt="YAML front matter">
</figure>

<figure>
  <img src="/img/posts/jekyll-blog/edited-post.png" class="blg-img" alt="edited post">
</figure>

<br>

### The Liquid Template System

Your entire project will be made up of either posts or pages. Jekyll uses liquid templates to render a model for each page or post and these templates are stored in the layouts folder. The default.html file provides the html layout and has handles (the brackets) which contain data to render or logic to be performed. Handles with percent signs (%) after it perform logic/calculations while double handles stands for render content. The handles are used throughout rendering partials from includes folder, layouts and posts.

{% highlight html linenos %}
{% raw %}
<!DOCTYPE html>
<html>
  {% include head.html %}
  <body>

    {% include head.html %}

    <div class="page-content">
      <div class="wrapper">
        {{ content }}
      </div>
    </div>

    {% include footer.html %}

  </body>
</html>
{% endraw %}
{% endhighlight %}

<br>

Let’s edit how the format the way we show our blog posts on the homepage. Go to the index.html file and inside the `<ul>` tags move the h2 tag up above the span tag. In the span tag add `by: {{ post.author }} on`. So we can display the author’s name. Next add a `<p>` tag after the span tags and add this line in between them `{{ post.excerpt | truncatewords:50 }}`. Reload the page and see the difference! We just added an author to each post and the first 50 words of the post.

{% highlight html linenos %}
{% raw %}
---
layout: default
---
<div class="home">
  <h1 class="page-heading">Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <h2>
          <a href="{{ post.url | prepend: site.baseurl }}" class="post-link">{{ post.title }}</a>
        </h2>

        <span class="post-meta">by: <strong>{{ post.author }}</strong> on {{ post.date | date: "%b %-d, %Y" }}</span>

        <p>
          {{ post.excerpt | truncatewords: 50 }}
        </p>
      </li>
    {% endfor %}
  </ul>
</div>
{% endraw %}
{% endhighlight %}

<figure>
  <img src="/img/posts/jekyll-blog/edited-homepage.png" class="blg-img" alt="edited post">
</figure>

<br>

### Adding Images
We can easily embed and image to our blog post. First grab and image and create a new folder called `img` at the root path of the project folder and place the image inside. Go to post.html under layouts folder and type the below code right after the ending header tag.

{% highlight html linenos %}
{% raw %}
{% if page.image %}
  <div class="post-img">
    <img src="/img/{{ page.image }}">
  </div>
{% endif %}
{% endraw %}
{% endhighlight %}

<br>

Now go back to your first post in posts folder and inside the yaml front matter block add `image: your-image-name.file-extension`. I added a bit of styling to center the image. Refresh the site and check it out a picture. We added an if statement so for posts that do not have an image the code is skipped and not rendered.

{% highlight html linenos %}
{% raw %}
---
layout: post
title: "Take a Bite of Apple"
date: 2016-03-30 19:40:24 -0500
categories: stocks
author: Pratik Shah
image: traders.jpeg
---
{% endraw %}
{% endhighlight %}

<figure>
  <img src="/img/posts/jekyll-blog/post-w-img.jpg" class="blg-img" alt="edited post">
</figure>

<br>

### Refactor by Creating Default Variables
When creating new posts over and over again defining the yaml front matter variables again and again can be tiresome but Jekyll lets you configure the default values in the config.yml file copy the code below to your config file. What we are doing is defining values that should automatically be loaded in any post template so that we don’t have to keep writing the yaml block. Next, go to the post and delete the author, category and layout we do not need them anymore. Restart your sever and everything should be the same as it was. You can always override the defaults by specifying the values in the yaml block in the post.

{% highlight html linenos %}
{% raw %}
# Default settings
defaults:
  -
    scope:
      path: ""
      type: "posts"
    values:
      author: Pratik Shah
      category: stocks
      layout: "post"

  -
    scope:
      path: ""
      type: "pages"
    values:
      layout: "page"
{% endraw %}
{% endhighlight %}

<br>

### Creating a New Page
Creating a new page is pretty simple. Let’s create a contact page for our blog. In the root folder of your project create a new file called contact.md or contact.html it doesn’t matter Jekyll will render both as long as you have the front matter at the top of the page; I will use markdown. See below how I did the contact page. Now when you refresh the page you should see a new link up top next to navigation called contact.  I have the `layout: page` variable but technically this should be under defaults in the config.yml file.

{% highlight html linenos %}
{% raw %}
---
title: Contact
permalink:  /contact/
layout: page
---

Please feel free to [email me](mailto:{{ site.email }})
{% endraw %}
{% endhighlight %}

<br>

### Naming Posts and Pagination
When creating new posts you need to specify a certain format so that Jekyll can organize in order by date. The format goes `YEAR-DAY-MONTH-Title-Of-Post-extension` ex: 2106-03-31-AT&T-Dividend-King.md.

I created a whole bunch of posts. As time goes on I will have hundreds of post that I can’t just display all at once so in order to post about 3 at a time we will use the built in pagination feature. First, we have to install the pagination gem via console so type `gem install jekyll-paginate` and restart after.  Go to the config.yml file and under site settings add the line `paginate: 3;` this will show 3 articles at a time. Under build settings add the line `gems: [jekyll-paginate]` Go to the index.html file and in the for loop for posts replace site.posts with `paginator.posts`.

You should now see a list of the first 3 articles but we are missing the navigation for the rest of the articles and we have to write some code for this to work; luckily there is a template already written on the Jekyll docs page so [click this link][template]. Copy the HTML snippet on the bottom and paste it right after the end of the ul tag in the index.html page. Refresh the page and you should now have a little pagination at the bottom


I hope you enjoyed this post and congrats you now know the basics of creating a blog or website using Jekyll. Now try adding comments to your posts or hosting your blog on GitHub pages. See links below and please leave any comments below.

<figure>
  <img src="/img/posts/jekyll-blog/jekyll-pag-gem.png" class="blg-img" alt="jekyll paginator gem">
</figure>

<figure>
  <img src="/img/posts/jekyll-blog/pagination-img.png" class="blg-img" alt="image of pagination">
</figure>


[Comments][comments-addon]

[Github pages][github-pages]









<!-- links -->
[ruby-installer]: http://rubyinstaller.org/
[jekyll-docs]: https://jekyllrb.com/docs/installation/
[jekyll-documentation]: https://jekyllrb.com/docs/configuration/
[permalink-link]: https://jekyllrb.com/docs/permalinks/
[template]: https://jekyllrb.com/docs/pagination/
[comments-addon]: https://help.disqus.com/customer/portal/articles/472138-jekyll-installation-instructions
[github-pages]: https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/