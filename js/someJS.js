// Page Turner app, initial js file
// 8/10/13


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
      return data;
      console.log("Data: " + data);
    }
  });
}

$(document).ready(function(){
	console.log("Dummy js working.");
	$('#messageWrapper').html('more text! in red!');
});