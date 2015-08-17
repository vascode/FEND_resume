var bio = {
	"name": "Seokwoo Yoon",
	"role": "Web developer",
	"WelcomeMessage":"Welcome! I have been working as Field application engineer in Wi-Fi & Bluetooth field for last 5 years, and now am transitioning to Front-end web developer. I am very excited!",
	"contacts": {
		"mobile":"(440) 941-6699",
		"email":"vascodepssn@gmail.com",
		"github":"vascode",
		"twitter":"@vascode",
		"location":"Cleveland, OH"
	},
	"bioPic": "images/myPic.png"
};

var skills = {
	"techSkills":
	[
		{
			"name": "HTML",
			"ability": 60
		},
		{
			"name": "CSS",
			"ability": 50,
		},
		{
			"name": "Javascript",
			"ability": 40,
		},
		{
			"name": "C++",
			"ability": 60,
		},
		{
			"name": "Python",
			"ability": 60,
		}
	],
	"langSkills":
	[
		{
			"language": "Korean - navtive tongue",
			"ability": 100
		},
		{
			"language": "English - full proficiency",
			"ability": 90
		}
	]
};

var work = {
	"jobs":
	[
		{
			"employer":"Laird Technologies",
			"title":"Field Application Engineer",
			"location":"Akron, OH",
			"dates":"2010 - 2015",
			"description":"troubleshoot WiFi and Bluetooth connectivity issues. 	worked with customers to integrate wifi + bluetooth radios, and trouble issues",
			"URL": "http://lairdtech.com/"
		},
		{
			"employer":"BioInVison",
			"title":"Research Assistant",
			"location":"Cleveland, OH",
			"dates":"2009 - 2010",
			"description":"operated Cryo-Imaging machine to capture sliced mice image in 3D",
			"URL": "http://www.bioinvision.com/"
		},
		{
			"employer":"Korean Military",
			"title":"Sergent",
			"location":"Yeoncheon, Korea",
			"dates":"2003 - 2005",
			"description":"worked in transportation department to transport vehicle components and organized them in stock",
			"URL": "http://www.mnd.go.kr/mbshome/mbs/mnd_eng/"
		}
	]
};

var projects = {
	"projects":
	[
		{
			"title":"Garage Door Opener",
			"dates":"2015",
			"description":"Built upon Rasberry Pi to monitor and control garage door by using Pi camera and NPN transistor.",
			"images":["images/project_LEGO1.jpg", "images/project_LEGO2.jpg"],
			"progress": 80
		},
		{
			"title":"Optical Coherence Tomograph(OCT) research",
			"dates":"2010",
			"description":"improved execution speed of OCT so that 2D images can be processed faster for making 3D image",
			"images":["images/project_OCT1.jpg", "images/project_OCT2.jpg"],
			"progress": 100
		},
		{
			"title":"LEGO MINDSTORMS NTX project",
			"dates":"2008",
			"description":"Built a robot that detected an object, picked it up and brought it to a marked position. ",
			"images":["images/project_LEGO1.jpg", "images/project_LEGO2.jpg"],
			"progress": 100
		}
	]
};

bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#bioPic").append(formattedBioPic);

	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
	$("#aboutMe").append(formattedMsg);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github)
									.replace("#", "https://github.com/vascode");

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter)
									  .replace("#", "https://twitter.com/vascode");
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts ul").append(formattedMobile);
	$("#topContacts ul").append(formattedEmail);
	$("#topContacts ul").append(formattedGithub);
	$("#topContacts ul").append(formattedTwitter);
	$("#topContacts ul").append(formattedLocation);

	var formattedMobile_footer = HTMLmobile_footer.replace("%data%", bio.contacts.mobile);
	var formattedEmail_footer = HTMLemail_footer.replace("%data%", bio.contacts.email);
	var formattedGithub_footer = HTMLgithub_footer.replace("%data%", bio.contacts.github)
													.replace("#", "https://github.com/vascode");

	var formattedTwitter_footer = HTMLtwitter_footer.replace("%data%", bio.contacts.twitter)
													  .replace("#", "https://twitter.com/vascode");
	var formattedLocation_footer = HTMLlocation_footer.replace("%data%", bio.contacts.location);

	$("#footerContacts ul").append(formattedMobile_footer);
	$("#footerContacts ul").append(formattedEmail_footer);
	$("#footerContacts ul").append(formattedGithub_footer);
	$("#footerContacts ul").append(formattedTwitter_footer);
	$("#footerContacts ul").append(formattedLocation_footer);

};

skills.display = function(){

	for (var skill in skills.techSkills){
		var pbar = 'pbar' + skill;
		var pbarLabel = 'pbar' + skill.toString() + '-label';

		var formattetdSkillOutter = HTMLskillOutter.replace("#id", pbar);
		var formattedSkillInner = HTMLskillInner.replace("#id", pbarLabel);

		$("#techSkills").append(formattetdSkillOutter);
		$("#"+ pbar).append(formattedSkillInner);

		$("#"+pbar).progressbar({
			value: skills.techSkills[skill].ability,
			create: function(){
				$("#"+pbarLabel).text(skills.techSkills[skill].name);
				$("#"+pbar + "> div").css({ 'background': 'rgb(88, 185, 250)' });
			}
		});
	}

	for (skill in skills.langSkills){
		var langBar = 'langBar' + skill;
		var langBarLabel = 'langBar' + skill.toString() + '-label';

		$("#"+langBar).progressbar({
			value: skills.langSkills[skill].ability,
			create: function(){
				$("#"+langBarLabel).text(skills.langSkills[skill].language);
				$("#"+langBar + "> div").css({ 'background': '#04B404' });
			}
		});
	}
};

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
												.replace("#", work.jobs[job].URL)

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		//var formattedDateLocation = formattedDate + formattedLocation;
		//$(".work-entry:last").append(formattedDateLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

projects.display = function() {

	for (var project in projects.projects){

		var div = 'div' + project;
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append('<div id="' + div + '" class="text-center side-padding"></div>');


		var divN = d3.select(document.getElementById(div));
        var rp = radialProgress(document.getElementById(div))
                .diameter(150)
                .value(projects.projects[project].progress)
                .render();

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$("#" + div).append(formattedTitle);

		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$("#" + div).append(formattedDate);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$("#" + div).append(formattedDescription);
	}
};

var education = {
	"schools": [
		{
			"name":"Case Western Reserve University",
			"degree":"Bachelor of Science in Engineering",
			"major":"Biomedical Engineering",
			"dates":"2007 - 2010",
			"location":"Cleveland, OH",
			"URL": "http://engineering.case.edu/ebme/"
		}
	],
	"onlineCourses": [{
		"title":"Front-end Web development",
		"school":"Udacity",
		"dates":"2015",
		"URL": "https://www.udacity.com/nanodegrees"
	},
	{
		"title":"Introduction to Computer Science and Programming Using Python",
		"school":"edX",
		"dates":"2014",
		"URL": "https://courses.edx.org/courses/MITx/6.00.1_4x/3T2014/"
	}]

};

education.display = function(){
	for (var school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name)
											.replace("#", education.schools[school].URL);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

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

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].URL)
										.replace("#", education.onlineCourses[course].URL);
		$(".education-entry:last").append(formattedURL);

	}
}

//calling functions for page layout starts here.
bio.display();
skills.display();
work.display();
//projects.display();
education.display();

$(document).ready(function(){
	projects.display();
});

/*
//$("#main").append(internationalizeButton);

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

*/