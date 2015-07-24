/*
$("#main").append(["seokwoo yoon"]);

var awesomeThoughts = "I am seokwoo yoon and I am AWESOME!\n";
$("#main").append(awesomeThoughts);

funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("main").append(funThoughts);
*/

var name = "seokwoo yoon";
var role = "web developer";

var formattedName = HTMLheaderName.replace("%data%", name );
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);