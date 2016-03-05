var source = $("#job-assignments-template").html(); 
var jobsAssignmentTemplate = Handlebars.compile(source);

var characters = [
{
	name: "Vaan",
	job: null
}, 
{
	name: "Penelo",
	job: null
}, 
{
	name: "Balthier",
	job: null
}, 
{
	name: "Fran",
	job: null
}, 
{
	name: "Basch",
	job: null
}, 
{
	name: "Ashe",
	job: null
}
];

var jobs = {};
 	jobs[0] = "White Mage";
 	jobs[1] = "Uhlan";
 	jobs[2] = "Machinist";
 	jobs[3] = "Red Mage";
 	jobs[4] = "Knight";
 	jobs[5] = "Monk";
 	jobs[6] = "Time Mage";
 	jobs[7] = "Breaker";
 	jobs[8] = "Archer";
 	jobs[9] = "Black Mage";
 	jobs[10] = "Samurai / Mononofu";
 	jobs[11] = "Hunter";

var data;

function run() { 
 	characters = shuffle(characters);
 	assignedJobs = matchJobs(characters, jobs);
 	data = marshalCharactersWithMatchedJobs(characters); 
 	$('#job-assignments').replaceWith(jobsAssignmentTemplate(data));

 	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	};

 	function matchJobs(characters, jobs) {
 		assignedJobs = {};
 		for (i=0; i < characters.length; i++) {
 			while(assignedJobs.getKeyByValue(characters[i].name) == null) {
 				var jobNumber = Math.floor((Math.random() * 11));
 				var job = jobs[jobNumber];
 				if (assignedJobs[job] == null) {
 					assignedJobs[job] = characters[i].name;
 				}
 			}

 		}
 		return assignedJobs;
 	};

 	function marshalCharactersWithMatchedJobs(characters) {
 		for (i=0; i < characters.length; i++) {
 			characters[i].job = assignedJobs.getKeyByValue(characters[i].name)
 		}
 		return { characters };
 	}	

 };
