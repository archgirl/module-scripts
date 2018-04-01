$(function () {
	var $content = $('#mediumPosts');
  
  // Convert RSS to JSON
	$.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F' + mediumHandle, function (response) {
		if (response.status == 'ok') {
			var output = '';
      
			$.each(response.items, function (k, item) {
        
        // Display the image
				output += '<article><a href="' + item.guid + '" aria-label="Read blog post"><header><div class="image"><img src="' + item.thumbnail + '">';
        
        // Get the date
        var date = new Date(item.pubDate);
        var json = JSON.stringify(date);
        var dateStr = JSON.parse(json);
        var newDate = new Date(dateStr);
        
        // Day
        var newDateDay = newDate.getDate();
        
        // Month
        var month = new Array();
          month[0] = "Jan";
          month[1] = "Feb";
          month[2] = "Mar";
          month[3] = "Apr";
          month[4] = "May";
          month[5] = "Jun";
          month[6] = "Jul";
          month[7] = "Aug";
          month[8] = "Sep";
          month[9] = "Oct";
          month[10] = "Nov";
          month[11] = "Dec";
        
        var newDateMonth = month[newDate.getMonth()];
        
        // Display the date
				output += '<div class="date"><p class="day">' + newDateDay + '</p><p class="month">' + newDateMonth + '</p></div></header>';
        
        // Display the title and link to post
				output += '<div class="post-details"><h3>' + item.title + '</h3>';
        
        // Display author
				output += '<div class="post-meta"><div><p class="post-author">' + item.author + '</p><p class="post-description">'
        
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
        output += '<div class="tags"><span class="category">' + item.categories[0] + '</span><span class="category">' + item.categories[1] + '</span><span class="category">' + item.categories[2] + '</span><span class="category">' + item.categories[3] + '</span><span class="category">' + item.categories[4] + '</span><span class="category">' + '</span></div></div></div></a></article>';
        
        // Display post categories - max of 5
        output += '</div></div></a></article>';
        
        // Limit to 3 posts
        return k < 2;
			});

      // Post all output
			$content.html(output);
		}
	});
});
