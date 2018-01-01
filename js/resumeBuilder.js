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
    "skills": ["aaaaaa","bbbbb","cccccc"],
    "bioPic": ""
};



var work = {
    
    "jobs": [
        {
            "employer": "Hospital",
            "title": "Technical Support",
            "location": "Riyadh",
            "dates": "2007",
            "description": "1st"
        },
        {
            "employer": "STCS",
            "title": "OSS Administrator",
            "location": "Riyadh",
            "dates": "2016 - 2018",
            "description": "2nd"
        },
    ] 
};



var education = {
    
    "shcools": [
        {
            "name": "Flinders University",
            "location": "Adelaide - South Australia",
            "degree": "Associate degree",
            "majors": [""],
            "dates": "2007",
            "url": "example"
        },
        {
            "name": "Flinders University",
            "location": "Adelaide - South Australia",
            "degree": "Associate degree",
            "majors": [""],
            "dates": "2013-2015",
            "url": "example"
        },
    ],

    "onlineCourses": [
        {
            "title": "",
            "school": "",
            "date": "2018",
            "url": "example"
        }
    ] 
};



var projects = {
    
    "projects": [
        {
            "title": "Mindset",
            "dates": "Nov",
            "description": "example",
            "images": ["http://placekitten.com/200/300","2nd image"]
        },
        {
            "title": "Animal",
            "dates": "Dec",
            "description": "example",
            "images": ["1st image","2nd image"]
        }
    ] 
};


// There is an issue with the below function - the image part

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
        
        if (projects.projects[i].images.length > 0) {
            for (image in projects.projects[i].images) {            
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
// the below for loop is not working well
//            for (var x = 0; x < projects.projects.[i].images.length; x++) {
//                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[x]);
//                
//                $(".project-entry:last").append(formattedImage);
//            }
        }
    }
}
$("#projects").append(projects.display());





if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = "";
    for ( var i = 0; i < bio.skills.length; i++ ) {
        formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
}

function displayWork() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;    
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x,y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).uppercase() + name[0].slice(1).toLowerCase();
    
    return name[0] +" "+name[1];
}
$("#main").append(internationalizeButton);