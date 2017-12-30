/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Abdulmohsen
//$("#main").append("Abdulmohsen Alkhamis");
//
//var awesomeThoughts = "I am Abdulmohsen and I am AWESOME!";
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//console.log(funThoughts);
//$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Abdulmohsen Alkhamis");

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name" : "Abdulmohsen Alkhamis",
    "role" : "Web Developer",
    "contact" : {
        "mobile": "+966-550708844",
        "email": "abdulmohsen-alkhamis@hotmail.com",
        "github": "Abdulmohsen-91",
        "twitter": "@abdulmohsen__91",
        "location": "Riyadh - Saudi Arabia"
    },
    "welcomeMessage": "hi there",
    "skills": ["a","b","c"],
    "bioPic": ""
};