// Many thanks to @jensbern!!! --  https://glitch.com/edit/#!/fluttering-dentist
// And to @wuz and the other Glitchers who helped write this!

window.onload = function() {
  let content = document.getElementById('mediumPosts'); // @jensbern fixed my typo
  let request = new XMLHttpRequest();
  
  // Convert RSS to JSON
  request.open('GET', 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F' + mediumHandle, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      let output = '';      
      let array = JSON.parse(request.responseText).items; // @jensbern moved .items outside
      
      // original broken piece:
      // let array = JSON.parse(request.items);
      
      array.forEach(function (item, n) {
        
        // Display the image
				output += '<article><a href="' + item.guid + '" aria-label="Read blog post"><header><div class="image-medium"><img src="' + item.thumbnail + '">';
        
        // Get the date
        let date = new Date(item.pubDate);
        let json = JSON.stringify(date);
        let dateStr = JSON.parse(json);
        let newDate = new Date(dateStr);
        
        // Day
        let newDateDay = newDate.getDate();
        
        // Month
        let month = new Array();
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
        
        let newDateMonth = month[newDate.getMonth()];
        
        // Display the date
				output += '<div class="date"><p class="day">' + newDateDay + '</p><p class="month">' + newDateMonth + '</p></div></header>';
        
        // Display the title and link to post
				output += '<div class="post-details"><h3>' + item.title + '</h3>';
        
        // Display author
				output += '<div class="post-meta"><div><p class="post-author">' + item.author + '</p><p class="post-description">'
        
        // Get post description
        let postDescription = item.description.replace(/<img[^>]*>/g,"");
				let maxLength = 80;
        
        // Trim description to maxLength
				let trimmedString = postDescription.substr(0, maxLength);
				
        // Re-trim if in the middle of a word
				trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        // Display trimmed description
				output += trimmedString + '...</p></div>';
        
        
        // Display post categories - max of 5
        output += '<div class="tags"><span class="category">' + item.categories[0] + '</span><span class="category">' + item.categories[1] + '</span><span class="category">' + item.categories[2] + '</span><span class="category">' + item.categories[3] + '</span><span class="category">' + item.categories[4] + '</span><span class="category">' + '</span></div></div></div></a></article>';
        
        // Display post categories - max of 5
        output += '</div></div></a></article>';
        
        // Show number of posts
        return n < postQuantity -1;
			});
      // Post all output
			content.innerHTML = output;
    }
  };

  request.send();
}
