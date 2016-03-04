window.onload = run;

function run() {

//helper, should extract this
Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
};


//should extract in to characters class
var members = [
"Vaan",
"Balthier",
"Fran",
"Basch",
"Ashe",
"Penelo",
];

assignParty(members);

//Randomly chooses 3 items from an array of Strings, specifically to be main party.  
//This can be extended to do more thorough processing
function assignParty(members) {
	partyMembers = members.sort(function(){return .5 - Math.random()}).slice(0,3);
};

//////should extract in to jobs class
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

var assignedJobs = {};

assignJobs(members, jobs);

function assignJobs(members, jobs) {
	for (i=0; i < members.length; i++) {
		while(assignedJobs.getKeyByValue(members[i]) == null) {
			var jobNumber = Math.floor((Math.random() * 11));
			var job = jobs[jobNumber];
			if (assignedJobs[job] == null) {
				assignedJobs[job] = members[i];
			}
		}
	}
};

document.body.innerHTML = ''; // clears the entire body of html - more useful in case of the button below being clicked again than anything else
document.write("<center><br><br><br><h1>")
document.write("The main party is ::: " + partyMembers[0] + ", " + partyMembers[1] + ", and " + partyMembers[2] + "!<br><br>");
document.write("<br><img src='img/Vaan.png'> Vaan :: " + assignedJobs.getKeyByValue("Vaan"));
document.write("<br><img src='img/Balthier.png'> Balthier :: " + assignedJobs.getKeyByValue("Balthier"));
document.write("<br><img src='img/Fran.png'> Fran :: " + assignedJobs.getKeyByValue("Fran"));
document.write("<br><img src='img/Basch.png'> Basch :: " + assignedJobs.getKeyByValue("Basch"));
document.write("<br><img src='img/Ashe.png'> Ashe :: " + assignedJobs.getKeyByValue("Ashe"));
document.write("<br><img src='img/Penelo.png'> Penelo :: " + assignedJobs.getKeyByValue("Penelo"));
document.write("</h1><br>Group/Job composition not to your liking?<br><button onclick='location.reload()'>Try again</button></center>"); // Reloads the page instead of re-running the functions. Firefox workaround. IE still borked.
};