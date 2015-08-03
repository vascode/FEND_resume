var bio = {
	"name": "seokwoo yoon",
	"role": "Web developer",
	"WelcomeMessage":"Welcome to Yoon's website",
	"contacts": {
		"mobile":"(440) 941-6699",
		"email":"vascodepssn@gmail.com",
		"github":"vascode",
		"twitter":"@vascode",
		"location":"Twinsburg, OH"
	},
	"skills": ["C++", "Wi-Fi", "Bluetooth"],
	"bioPic": "images/myPic.png"
};

bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
	$("#header").append(formattedMsg);


	if (bio.skills.length >  0) {
		$("#header").append(HTMLskillsStart);

		//var formattedSkills;
		for (i=0; i<bio.skills.length; i++) {
			//formattedSkills = HTMLskills.replace("%data", bio.skills[i]);
			//$("#skills").append(formattedSkills);
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}
};

var work = {
	"jobs":
	[
		{
			"employer":"Laird Technologies",
			"title":"Field Application Engineer",
			"location":"Akron, OH",
			"dates":"2010-2015(current)",
			"description":"worked with customers to integrate wifi + bluetooth radios, and trouble issues"
		},
		{
			"employer":"BioInVison",
			"title":"Research Assistant",
			"location":"Cleveland, OH",
			"dates":"2009-2010",
			"description":"operated Cryo-Imaging machine to capture sliced mice image in 3D"
		},
		{
			"employer":"Korean Military",
			"title":"Sergent",
			"location":"Yeoncheon, Korea",
			"dates":"2003-2005",
			"description":"worked in transportation department to transport vehicle components and organized them in stock"
		}
	]
};


work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDateLocation = formattedDate + formattedLocation;
		$(".work-entry:last").append(formattedDateLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

var projects = {
	"projects":
	[
		{
			"title":"Optical Coherence Tomograph(OCT) research",
			"dates":"2009-2010",
			"description":"improved execution speed of OCT so that 2D images can be processed faster for making 3D image",
			"images":["images/project_OCT1.jpg", "images/project_OCT2.jpg"]
		},
		{
			"title":"LEGO MINDSTORMS NTX project",
			"dates":"2008",
			"description":"Built a robot that detected an object, picked it up and brought it to a marked position. ",
			"images":["images/project_LEGO1.jpg", "images/project_LEGO2.jpg"]
		}
	]
};

projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDate);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name":"Case Western Reserve University",
			"degree":"Bachelor of Science",
			"major":"Biomedical Engineering",
			"dates":"2007-2010",
			"location":"Cleveland, OH"
		}
	],
	"onlineCourses": [{
		"title":"Front-end Web development",
		"school":"Udacity",
		"dates":"2015",
		"url": "https://www.udacity.com/nanodegrees"
	},
	{
		"title":"Introduction to Computer Science and Programming Using Python",
		"school":"edX",
		"dates":"2014",
		"url": "https://courses.edx.org/courses/MITx/6.00.1_4x/3T2014/info"
	}]

};

education.display = function(){
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		//$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		//$(".education-entry:last").append(formattedDegree);

		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDate);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses){
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		//$(".education-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		//$(".education-entry:last").append(formattedSchool);

		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);


		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDate);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);

	}
}

//displayBio();
//displayWork();
bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);

function inName(oldName) {
	var finalName;
    var name = oldName.split(' ');
    firstName = name[0];
    lastName = name[1];

    finalName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()  + ' ' + lastName.toUpperCase();

    // Don't delete this line!
    return finalName;
}

//var inter_name = inNmae("sebastian thrun");
//$("#main").append(inter_name);





/*
for (project in projects.projects){
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

	$(".project-entry:last").append(formattedTitle);

}*/

