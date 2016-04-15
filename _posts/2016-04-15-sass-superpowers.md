---
title:  "The Sass Way!"
date:   2016-04-15
image: "/sass-blog/sass-logo.png"
---

If you get frustrated with how messy and unmanageable your CSS gets, wish you didn't have to specify properties over and over, or wished you could compute
mathematical operations then you need SASS an extention of CSS that does all of this and more. I wished I had known about SASS sooner as I would have saved countless hours of time writting CSS. Lucky for you today I am going to give you the full crash coure of how to write in the SASS scripting language. Don't worry its as easy as learning Texas Holdem and you will thank yourself for learning it. `Unedited version`

<br>

### What is SASS?

Well according to the [official SASS][SASS] site SASS is:
<blockquote>CSS with superpowers</blockquote>
SASS is a preprocessed language written in Ruby that extends the functionality of css; preprocessed meaning compiler must compile the code from sass to css.

#### Below is a list of powers you get:
<ul class="blg-lists">
	<li>Variables</li>
	<li>Nesting css inside other css selectors</li>
	<li>Partials</li>
	<li>Extend classes - allow classes to be used inside other classes</li>
	<li>Math operations and conditionals</li>
	<li>Mixins - aka functions/methods</li>
</ul>

There are two different versions of SASS the old format ends in extentions `.sass` and the new format ends in `.scss` I will be teaching you the `.scss` way.

<br>

### Variables

Variables are great to store property values so that you don't have to keep referencing them over and over again; colors are a great use for this. To create a variable begin the variable name with a `$` sign and then the variable name followed by a colon and the value `$varname: value`. To use the the variable simply reference the variable name when after the css property. Another great use is to store font list to a variable. See below for examples


{% highlight sass linenos %}
{% raw %}
// variables in sass start off with at $variableName: value
$offwhite: #EEE86D;

body { background-color: $offwhite }

// you can even pair selector and value as variables
$color-main: $offwhite

body { background-color: $color-main; }

// Variables are really useful when using them for fonts
$font-main: 'Oswald', 'Helvetica', 'serif';
{% endraw %}
{% endhighlight %}

<br>

### Nesting
One of the best features of `SASS` is the ability to nest slectors. This helps writting less code and makes it more readable and organized. Think about if you had a `div` and inside was an `ul`, `li` and inside the list was an anchor 'a'. Instead of having to traverse each selector individually I can nest inside the div and change each selector's property; basically creating sub rules. Nest only 3-4 levels deep otherwise it may be hard to manage. See below.

{% highlight sass linenos %}
{% raw %}
// putting rules inside other rules creates nested sub rules
.div {
    margin: 0;
    padding: 0;

    ul {
        list-style-type: none;
        border-top: 1px dotted $color-item-border;

        .list {
        	display: inline-block;
        }
    }
}
{% endraw %}
{% endhighlight %}

<br>

### Paritals

Just like you do when you develop, creating partials is a great way to split up sections of your css and making it easier to pinpoint parts of your css. When creating a a partial you begin the file name with an underscore; for example, `_variables` will house all your variables. You can seperate more than your variables such as mixins, your entire footer or header css into partials. To import a partial into another file use the `@import` keyword followed by the filename; `@import 'header;'.

{% highlight sass linenos %}
{% raw %}
// to import files partial files use @import
// you could have all of these imported in style.scss file
// partial file begin with _ ex: _variables
@import 'variables';
@import 'base';
@import 'modules/media';
{% endraw %}
{% endhighlight %}

<br>

### Mixins

Mixins are just like functions that you see in javascript. It helps keep your code DRY (don't repeat yourself) and becomes very useful when you have to keep repeating properties with differnt values. I can create a simple mixin using the format: `@mixin mixinName($args) { code }`. To use the mixin you simple use the `@import` keyword so `@import mixinName($args)`. One more thing to specify a default value of an argument use the `: value` symbol. See below for detailed example.

{% highlight sass linenos %}
{% raw %}
// to create a mixin use @mixin mixinName($varName) { code }
@mixin setSize($height, $width) {
    height: $height;
    width: $width;
}

// to use mixin - file path is relative to style.css NOT style.scss
img {
    @include setSize(auto, 600px)
}

// you can specify a default value using : value
// below height value is 100% of viewport height
@mixin setSize($height: auto, $width: 100%) { code }
{% endraw %}
{% endhighlight %}

<br>

### @extend keyword

The `@extend` keyword allows you to import another selector's properties and values into another; its basically inhertiance the second selector inherits all the properties. To use simply write `@inherit selector`.

{% highlight sass linenos %}
{% raw %}
.button {
    background-color: red;
    border: 1px solid blue;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
}

.button-success {
	@extend .button;
	background-color: green;
}
{% endraw %}
{% endhighlight %}

<br>

### Using Parent Elements With & Symbol

The `&` symbol allows you to select the parent element which is really usefule when applying pseudo class such as :hover :active etc...

{% highlight sass linenos %}
{% raw %}
a {
    padding: 10px 5px;

    &:hover {
        background: $yellow;
    }
}
{% endraw %}
{% endhighlight %}

The `&` symbol is also used as a conditional if that you can apply styling to if the html doc contains the selector. See below

// you can use & for a conditional and
// below says if inside html there is a head class and typography id then apply a color of twitter blue

{% highlight sass linenos %}
{% raw %}
.title {
    margin, padding: 0;
    color: $color-media-head;
    font-size: 2em;

    #typography & {
        color: $twt-clr
    }
}
{% endraw %}
{% endhighlight %}

<br>

### Math Operaters

SASS allows you the ability to create simple mathematical calculations using operators for addition `+`, subtraction `-`, multiplication `*`, division `\` and modulus `%`.

{% highlight sass linenos %}
{% raw %}
@mixin setWidth($qty) {
    width: 960px / $qty * 100%;
}
{% endraw %}
{% endhighlight %}

<br>

### Creating Arrays

To create a list/array of values with a property simply add a comma and then the value. The arrays are not 0 index so the first element is index number 1. To access a specific value use the `$` parenthesis `()` and inside parenthesis put the variable name and index number: `$(color 2)`.

{% highlight sass linenos %}
{% raw %}
// you can create lists using commas or spaces
$font-body: Industry, Helvetica, Serif;

// you can access a specific element using $(varName index#) NOT 0 index
$font-body: Industry, Helvetica, Serif;
$(font-body 1);
{% endraw %}
{% endhighlight %}

<br>

### If Else Conditionals

Using the `@if condiiton` and `@else` you can assign differnt properties and values depending on the truthiness of the condition.

{% highlight sass linenos %}
{% raw %}
// you can create lists using commas or spaces
$btn-clr: blue;

@mixin buttonBackground($btn-clr) {
    @if $btn-clr == blue {
        background-color: red;
    } @else {
        background-color: green;
    }
}
{% endraw %}
{% endhighlight %}

<br>

### Loops & Iterations

Yes, you can even loop through your variables and assign different properties for each iteration. Since there are many types of loops take a look at this [great article on loops][loops]. Below is an example of a using a for loop to change the color of each heading tag.

{% highlight sass linenos %}
{% raw %}
// you can use for loop by @for counterName from start# through end# { code }
$colors: $red, $blue, $green, $orange, $yellow, $purple;

@for $item from 1 through length($colors) {
    h#{$item} {
        color: $(colors, $item);
    }
}
{% endraw %}
{% endhighlight %}

<br>

### Creating Hashes

Last, I want to show you how to create a hash and access a key and its value. To create a hash you use the format `$variable: ( key: value, key: value)` and to access one of the values of the key you use map-get function: `map-get($map, $key)`. Here is a nice detailed [article on hashes][hash].

{% highlight sass linenos %}
{% raw %}
$button-color: (
    default: $white,
    danger: $red,
    primary: $blue,
    success: $green
);

.btn-sucess { color: map-get($button-color, $success) }
{% endraw %}
{% endhighlight %}

<br>

### Commenting

One final thing. Comments are really useful when documenting your code to understand what is executing in the below statements.
Create a comment b `/* comment */`. You can force a comment to show up even in minified versions using a `!` after opening  `/*! comment */`. you can create hidden comments using `//` and the comments will not show up in processed version of stylesheet



<!-- links -->
[SASS]: http://sass-lang.com/
[loops]: http://thesassway.com/intermediate/if-for-each-while
[hash]: http://www.sitepoint.com/using-sass-maps/