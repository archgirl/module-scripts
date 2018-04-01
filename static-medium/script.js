$(function () {
	var $content = $('#mediumPosts');
  
  // Convert RSS to JSON
	$.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F' + mediumHandle, function (response) {
		if (response.status == 'ok') {
			var output = '';
      
			$.each(response.items, function (k, item) {
        
        // Display the image and link to post + display post date
				output += '<article><header><a href="' + item.guid + '" class="image"><img src="' + item.thumbnail + '"></a><span class="date">' + $.format.date(item.pubDate, "dd<br>MMM") + '</span></header>';
        
        // Display the title and link to post
				output += '<div class="post-details"><h3><a href="'+ item.guid + '">' + item.title + '</a></h3>';
        
        // Display author
				output += '<div class="post-meta"><div><p class="post-description">' + item.author + '</p><p>'
        
        // Get post description
        var postDescription = item.description.replace(/<img[^>]*>/g,"");
				var maxLength = 80;
        
        // Trim description to maxLength
				var trimmedString = postDescription.substr(0, maxLength);
				
        // Re-trim if in the middle of a word
				trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        // Display trimmed description
				output += trimmedString + '...</p></div>';
        
        // Display post categories - max of 5
        output += '<div><span class="category">' + item.categories[0] + '</span><span class="category">' + item.categories[1] + '</span><span class="category">' + item.categories[2] + '</span><span class="category">' + item.categories[3] + '</span><span class="category">' + item.categories[4] + '</span><span class="category">' + '</span></div></div></div></article>';
        
        // Limit to 3 posts
        return k < 2;
			});

      // Post all output
			$content.html(output);
		}
	});
});
