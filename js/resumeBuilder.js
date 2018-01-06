/*
This is empty on purpose! Your code to build the resume will go here.
 */





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
    "welcomeMessage": "Hi there, I hope you like this resume",
    "skills": ["Troubleshooting","Time Management"],
    "biopic": "./images/fry.jpg"
};



var work = {
    
    "jobs": [
        {
            "employer": "Hospital",
            "title": "Technical Support",
            "location": "Riyadh",
            "dates": "2007",
            "description": "1st job"
        },
        {
            "employer": "STCS",
            "title": "OSS Administrator",
            "location": "Riyadh",
            "dates": "2016 - 2018",
            "description": "2nd job"
        },
    ] 
};



var education = {
    
    "schools": [
        {
            "name": "Flinders University",
            "location": "Adelaide",
            "degree": "Associate degree",
            "majors": ["Information Technology"],
            "dates": "2007",
            "url": "example"
        },
        {
            "name": "Riyadh College of Technology",
            "location": "Riyadh",
            "degree": "Associate degree - Diploma",
            "majors": ["Technical Support"],
            "dates": "2007-2009",
            "url": "example"
        },
    ],

    "onlineCourses": [
        {
            "title": "FEND",
            "school": "Udacity",
            "dates": "2018",
            "url": "www.udacity.com"
        },
        {
            "title": "JS",
            "school": "Online",
            "dates": "2017",
            "url": "example"
        }
    ] 
};



var projects = {
    
    "projects": [
        {
            "title": "Mindset",
            "dates": "Nov 2017",
            "description": "A brief about myself and my future goals & letter to myself.",
            "images": ["http://via.placeholder.com/350x150"]
        },
        {
            "title": "Animal Trading Cards",
            "dates": "Dec 2017",
            "description": "Using what I've learned about CSS to convert a design prototype "+
            "into a functional webpage!",
            "images": ["http://via.placeholder.com/350x150"]
        },
        {
            "title": "Portfolio Site",
            "dates": "Dec 2017",
            "description": "Developing a responsive website that will display images, "+
            "descriptions and links to each of the portfolio projects I have completed "+
            "throughout the course of my Nanodegree program.",
            "images": ["http://via.placeholder.com/350x150"]
        }
        
    ] 
};



bio.display = function () {
    
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(formattedTwitter);
    var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedlocation);
    
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);
    
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = "";
        for ( var i = 0; i < bio.skills.length; i++ ) {
            formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};
bio.display();


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
};
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
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var x = 0; x < education.onlineCourses.length ; x++) {
        
        
        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[x].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[x].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[x].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[x].url);
        $(".education-entry:last").append(formattedURL);
    }
};
education.display();


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x,y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] +" "+name[1];
}
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);