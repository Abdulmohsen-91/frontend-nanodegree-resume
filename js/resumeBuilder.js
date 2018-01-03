/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace("%data%", "Abdulmohsen Alkhamis");

var role = "OSS Administrator";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



var bio = {
    "name" : "Abdulmohsen Alkhamis",
    "role" : "OSS Administrator",
    "contacts" : {
        "mobile": "+966-550708844",
        "email": "abdulmohsen-alkhamis@hotmail.com",
        "github": "Abdulmohsen-91",
        "twitter": "@abdulmohsen__91",
        "location": "Riyadh"
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
    
    "schools": [
        {
            "name": "Flinders University",
            "location": "Adelaide",
            "degree": "Associate degree",
            "majors": ["aaa","ddd"],
            "dates": "2007",
            "url": "example"
        },
        {
            "name": "Flinders University",
            "location": "Adelaide",
            "degree": "Associate degree",
            "majors": ["eee","eee"],
            "dates": "2013-2015",
            "url": "example"
        },
    ],

    "onlineCourses": [
        {
            "title": "FEND",
            "school": "Udacity",
            "date": "2018",
            "url": "example"
        },
        {
            "title": "JS",
            "school": "Online",
            "date": "2017",
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
            "images": ["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"]
        },
        {
            "title": "Animal",
            "dates": "Dec",
            "description": "example",
            "images": ["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"]
        },
        {
            "title": "Portfolio",
            "dates": "Dec",
            "description": "example",
            "images": ["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"]
        }
        
    ] 
};

work.display = function () {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;    
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);
    }
}
work.display();


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
            var formattedImage = "";
            for (var x = 0; x < projects.projects[i].images.length; x++) {
                formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[x]);
                
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

// the Below 2 for loops need to be fixed, for example, nested for loop
education.display = function() {
    for (var i = 0; i < education.schools.length ; i++) {
        $("#education").append(HTMLschoolStart);
        
        var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);   
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
        $(".education-entry:last").append(formattedMajor);
    }
    for (var x = 0; x < education.onlineCourses.length ; x++) {
        $("#education").append(HTMLonlineClasses);
        
        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[x].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[x].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[x].date);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[x].url);
        $(".education-entry:last").append(formattedURL);
    }
};
education.display();




if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = "";
    for ( var i = 0; i < bio.skills.length; i++ ) {
        formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
}

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

$("#mapDiv").append(googleMap);