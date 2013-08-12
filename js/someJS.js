// Page Turner app, initial js file
// 8/10/13


var url1 = 'http://api.harpercollins.com/api/v2/hcapim?apiname=ProductInfo&format=XML&param3=';
var url2 = '&apikey=yjhac55fhkd2vhe2u5gnz3rc';

// example: helWor("The Old Man and")
function helWor(title) {
  title = title || "default";
  console.log("workin' on it");
  $.ajax({
    type: "get",
    // warning: this part will require some regex to replace spaces with '+'
    url: url1 + title + url2,
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