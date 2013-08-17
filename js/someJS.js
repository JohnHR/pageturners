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
var book1 = new Book(321423, 'A Tale of 2 Cities', "Bob Kraut");

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


//constructor
function Book(id, title, author){
	this.id = id || 8675309;
	this.title = title || "50 Shades of Grey";
	this.author = author || "Mark Zuckerberg";
	// this.breakBinding = function() {
	// 	console.log("own stuff gets done");
	// }
}





//prototypes
Book.prototype.breakBinding = function() {
	console.log("proto stuff gets done");
}
Book.prototype.author = "Santa Claus";









// api call

var url1 = 'http://api.harpercollins.com/api/v3/hcapim?apiname=ProductInfo&format=XML&isbn=';
var url2 = '&apikey=yjhac55fhkd2vhe2u5gnz3rc';
var fUrl = "http://api.harpercollins.com/api/v3/hcapim?apiname=ProductInfo&format=XML&isbn=9780064410304&apikey=yjhac55fhkd2vhe2u5gnz3rc";
var fUrl2 = "http://api.harpercollins.com/api/v3/hcapim?apiname=catalog&format=JSON&title=American&apikey=yjhac55fhkd2vhe2u5gnz3rc";

function getByTitle(title) {
  title = title || "default";
  console.log("getting with an AJAX request...");
  $.ajax({
    type: "get",
    url: fUrl2,
    // headers: {
    //    "X-Requested-With": "XMLHttpRequest",
    //    "X-Originating-Ip": "127.0.0.1:8000"
    // },
    success: function (data) {
      console.log("AJAX load successful.  Returning all books with 'American' in title, in JSON format.");
      console.log(data);
      //$('#data').html(data);
    }
  });
}

function basicGet() {
  console.log("getting with an HTTP request...");
  $.get(fUrl, function(data) {
    //$('.result').html(data);
    console.log('HTTP load was performed. Returning book with ISBN 9780064410304, in XML format.');
    console.log(data);
    //$('#data').html(data);
  });
}

$(document).ready(function(){
	console.log("Dummy js working.");
	//$('#messageWrapper').html('more text! in red!');
  $('#ajax').click( getByTitle );
  $('#http').click( basicGet );
});













