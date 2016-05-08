---
title:  "Snippet - Slideshow"
date:   2016-05-08
image: "/snip-slideshow-blog/header.jpg"
---

Creating an automated slideshow plugin may look a little challenging at first but its actually pretty simple once you break it down. This code will allow you to show a set of images that transition every X seconds. It will be reusable and for a great example check out my projects page to see them in action.

<br>

### Requirements?

There are a couple of things we will need in order for this to work. First, you will need the jQuery plugin which you can find [here][JQUERY]. Another item we will need is of course a set of images! Images need to be the same height and width. I used JPEG images for performance but give up quality; for more information on file types check out this [post][IMG_FILE].

<br>

### Setup

Lets get the file structure out of the way. Create a folder called `slideshow` and inside of it create a file called `index.html`. Next, inside of the `slideshow` folder create another folder called `imgs` and place all your images inside of there. Then, in root directory create two files one called `script.js` and the other `style.css`. Your folder structure should look similar to below. Also, make sure jquery is loaded before the script file.

<figure>
  <img src="/img/posts/snip-slideshow-blog/folder-structure.jpg" class="blg-img" alt="folder structure">
</figure>

Last open up your text editor and setup basic html strucutre in `index.html`. You can copy the code below.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Image Sildeshow</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <script   src="https://code.jquery.com/jquery-2.2.3.min.js"   integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo="   crossorigin="anonymous"></script>
  <script src="script.js"></script>
</head>

<body>

</body>
</html>
```
<br>

### HTML Structure

We will need to setup the html markup first so head back to your index.html file. Create a `div` tag with `id="slideshow-demo"` and inside create `img` tags for however many images you have in your slideshow. Set the file path for each image which should be `imgs/<image-name.extension>`. Your images will be unstacked for now but that is ok we will work on that in the next part.

``` html
<div id="slideshow-demo">
    <img src="imgs/yeeld-home.jpg">
    <img src="imgs/yeeld-index.png">
    <img src="imgs/yeeld-show.png">
</div>
```
<figure>
  <img src="/img/posts/snip-slideshow-blog/div-imgs.jpg" class="blg-img" alt="html output of div and imgs">
</figure>

<br>

### CSS Structure

We need to set some properties for the div and images so that the position of the images stack ontop of each other. In your `style.css` file set the `div#slideshow-demo` position to `relative`. Set the position for the images inside of the div to `absolute`. This will stack all the images on top of each other leaving the last image showing. What the css is simply stating is that for `img` tags position them relative to where the div tag is.

``` css
div#slideshow-demo { position: relative; }

div#slideshow-demo img { position: absolute; }
```
<figure>
  <img src="/img/posts/snip-slideshow-blog/css-position.jpg" class="blg-img" alt="div and imgs positioning">
</figure>

We need to create two classes that will be used later to set the state of an image to be hidding or showing. Create a class called `show-img` with a property of `display` and value of `inline-block`. Create another class called `hide-img` with a property of `display` and value of `none`. Also in your `index.html` set the class of the first image to `show-img` and the rest to `hide-img`.

``` css
.show-img { display: inline-block; }

.hide-img { display: none; }
```

``` html
  <div id="slideshow-demo">
    <img src="imgs/yeeld-home.jpg" class="show-img">
    <img src="imgs/yeeld-index.png" class="hide-img">
    <img src="imgs/yeeld-show.png" class="hide-img">
  </div>
```

<br>

### JavaScript Plugin Creation

Ok now for the main event of this tutorial. Open your `script.js` file and lets get down to work for the workhorse of this plugin.

<!-- links -->
[JQUERY]: http://jquery.com/
[IMG_FILE]: http://1stwebdesigner.com/image-file-types/