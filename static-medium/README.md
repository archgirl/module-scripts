# Medium blog feed for Static Sites

* * *
* * *

## How To Use It

### 1. Include CSS styling before `</head>`

```
<link rel="stylesheet" href="https://archgirl.github.io/module-scripts/static-medium/style-post-cards.css">
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

```
<script>
  // Assign publication feed URL
  var mediumHandle = 'your-medium-publication-slug';
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-dateFormat/1.0/jquery.dateFormat.min.js"></script>
<script src="https://archgirl.github.io/module-scripts/static-medium/script.js"></script>
```
* * *
* * *

## Using this with [Carrd](https://carrd.co/)

### 1. Add Embed Widgets

First you'll want to import the base styling in Embed Widget #2

- Type = Code
- Label = blog-medium-style
- Style = hidden + head
- Code = `<link rel="stylesheet" href="https://archgirl.github.io/module-scripts/static-medium/style-post-cards.css">`

Then you'll want to import the scripts in Embed Widget #2

- Type = Code
- Label = blog-medium-scripts
- Style = hidden + body end
- Code =

```
<script>
 var mediumHandle = 'your-medium-publication-slug';
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-dateFormat/1.0/jquery.dateFormat.min.js"></script>
<script src="https://archgirl.github.io/module-scripts/static-medium/script.js"></script>
```

**Don't forget to replace the `mediumHandle` with your own!**

Lastly, add a text block. The default "text" will get replaced by your posts, so you can ignore it.

In Settings, you need to set:

- ID = mediumPosts
- Class = posts

Here's my demo! [https://mmagdalena.carrd.co/](https://mmagdalena.carrd.co/)
