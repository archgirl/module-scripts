# Medium blog feed for Static Sites

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

### 3. Add the script before `</body>`

```
<script src="https://archgirl.github.io/module-scripts/static-medium/script.js"></script>

<script>
  // Assign publication feed URL
  var mediumHandle = 'your-medium-publication-slug';
</script>
```

Be sure to replace the handle with your feed!

For example:

- my publication = `creative-design-by-m2`
- my personal feed = `@mmagdalena`
