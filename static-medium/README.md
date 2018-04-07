# static-medium :: Medium blog feed for Static Sites

* * *
* * *

## How To Use It

### 1. Include CSS styling before `</head>`

There are 3 style options!

**Card style**

![card style gif](https://archgirl.github.io/module-scripts/static-medium/img/medium-hover-card.gif)

**Card Narrow style**

![card narrow style gif](https://archgirl.github.io/module-scripts/static-medium/img/medium-hover-card2.gif)

**List style**

![card narrow style gif](https://archgirl.github.io/module-scripts/static-medium/img/medium-hover-list.gif)

Add the CSS for the style you want.

```
<!-- For Card style -->
<link rel="stylesheet" href="https://archgirl.github.io/module-scripts/static-medium/style-post-cards.min.css">

<!-- For Card Narrow style -->
<link rel="stylesheet" href="https://archgirl.github.io/module-scripts/static-medium/style-post-cards-narrow.min.css">

<!-- For List style -->
<link rel="stylesheet" href="https://archgirl.github.io/module-scripts/static-medium/style-post-list.min.css">
```

### 2. Add the posts div inside the `<body>` where you want it

```
<div class="posts" id="mediumPosts">
  <!-- Medium posts populate here -->
</div>
```

### 3. Prepare Your Medium Slug

You will need to replace the placeholder handle with your feed!

For example:

- my publication = `creative-design-by-m2`
- my personal feed = `@mmagdalena`

### 4. Add the scripts before `</body>`

Update the placeholder slug using your own.

Set the number of posts you would like. By default it is three.

```
<script>
  // Assign publication feed URL
  var mediumHandle = 'your-medium-publication-slug';
  // Number of posts to display
  var postQuantity = 3;
</script>
<script src="https://archgirl.github.io/module-scripts/static-medium/script.js"></script>
```
* * *
* * *

## Using this with [Carrd](https://carrd.co/)

### 1. Add Embed Widgets

First you'll want to import the base styling in Embed Widget #1

- Type = Code
- Label = blog-medium-style
- Style = hidden + head
- Code = your preferred CSS link (scroll back up to pick)

Then you'll want to import the scripts in Embed Widget #2

- Type = Code
- Label = blog-medium-scripts
- Style = hidden + body end
- Code =

```
<script>
  var mediumHandle = 'your-medium-publication-slug';
  var postQuantity = 3;
</script>

<script src="https://archgirl.github.io/module-scripts/static-medium/script.min.js"></script>
```

**Don't forget to replace the `mediumHandle` with your own!**

Lastly, add a text block. The default "text" will get replaced by your posts, so you can ignore it.

In Settings, you need to set:

- ID = mediumPosts
- Class = posts

Here's my demo! [https://mmagdalena.carrd.co/](https://mmagdalena.carrd.co/)

* * *
* * *

## Changelog

2018.04.07 :: Removed jQuery dependency with the help of some awesome people on Glitch!

2018.04.01 :: Added additional styles, removed date parser dependency

2018.03.31 :: Created! Started with 2 external library dependencies.
