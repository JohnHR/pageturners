// Page Turner app, initial js file
// 8/10/13

// data structures

var book = {
  id: 321423,
  title: 'A Tale of Two Cities',
  author: 'Charles Dickens',
  genres: ['horror', 'humor', 'self-help'],
  year: 1859,
  synopsis: 'I am a cool description',
  reviews: ['this book is the best', 'this was better than the sequel'],
  cover: '/img/covers/321423.png',
  quote: 'It was the best of times, it was the worst of times...',
  excerpt: 'Im blue lah bah dee lah bah dah, lah bah dee lah bah dai, lah bah dee lah bah dai...',
  lookupBuyingWebsites: function() { console.log('ohai i found an amazon link');}
};

var user = {
  id: 123,
  name: 'Ishmael',
  revealsRemaining: 1,
  savedGenres: ['adventure', 'marine biology'],
  savedBooks: [321423, 1234123, 1234214], // max of 3
  discardedBooks: [456, 2495820, 2134123, 134123, 132412],
  ignoredBooks: [546245, 23425],
  purchasedBooks: []
};

// api call

var url1 = 'http://api.harpercollins.com/api/v2/hcapim?apiname=ProductInfo&format=XML&param3=';
var url2 = '&apikey=yjhac55fhkd2vhe2u5gnz3rc';

// example: helWor("The Old Man and")
function getByTitle(title) {
  title = title || "default";
  console.log("getting by title...");
  $.ajax({
    type: "get",
    // warning: this part will require some regex to replace spaces with '+'
    // it's also currently hard-coded and not general at all
    url: url1 + title + url2,
    // thought the below would fix the access origin control errors
    // We faced this is CPMWA a bunch because Chrome is a tight-fisted punk, but it usually worked to run it from
    //	a web server.  That's not working now, and I'm tapped out for the night.
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-Originating-Ip": "127.0.0.1:8000"
    },
    success: function (data) {
      console.log("Data: " + data);
      return data;
    }
  });
}

$(document).ready(function(){
	console.log("Dummy js working.");
	$('#messageWrapper').html('more text! in red!');
});