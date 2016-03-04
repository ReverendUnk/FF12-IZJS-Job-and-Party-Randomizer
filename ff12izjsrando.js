// I hate Javascript, but it's the only programming language I have ANY experience in.
// That said, my 'experience' with it - up until this - was over 15 years ago.
//
// This code will be bad, and I'll feel bad, but hopefully it will work.
// Hopefully.
//   - Reverend Unk

document.write("<button onclick='aram()'>Click to FULLY randomize the party/jobs</button>"); // Ideally, this wouldn't be needed for the first run, but I'm dumb, so it is.
function aram() {
var members = [
	" Vaan",
	" Balthier",
	" Fran",
	" Basch",
	" Ashe",
	" Penelo",
];
var partyMembers = members.sort(function(){return .5 - Math.random()}).slice(0,3); // Randomly chooses 3 from the party members listed above.
var jobs = [
	"White Mage",
	"Uhlan",
	"Machinist",
	"Red Mage",
	"Knight",
	"Monk",
	"Time Mage",
	"Breaker",
	"Archer",
	"Black Mage",
	"Samurai / Mononofu",
	"Hunter",
];
var balthier = jobs.sort(function(){return .5 - Math.random()}).slice(0,1); // Randomly chooses 1 from the jobs listed above for Balthier.
var vaan = jobs.sort(function(){return .5 - Math.random()}).slice(0,1);
var fran = jobs.sort(function(){return .5 - Math.random()}).slice(0,1);
var basch = jobs.sort(function(){return .5 - Math.random()}).slice(0,1);
var ashe = jobs.sort(function(){return .5 - Math.random()}).slice(0,1);
var penelo = jobs.sort(function(){return .5 - Math.random()}).slice(0,1);

document.body.innerHTML = ''; // clears the entire body of html - more useful in case of the button below being clicked again than anything else
document.write("<center><br><br><br><h1>")
document.write("The main party is :::" + partyMembers + "<br><br>");
document.write("<br><img src='img/Vaan.png'> Vaan :: " + vaan);
document.write("<br><img src='img/Balthier.png'> Balthier :: " + balthier);
document.write("<br><img src='img/Fran.png'> Fran :: " + fran);
document.write("<br><img src='img/Basch.png'> Basch :: " + basch);
document.write("<br><img src='img/Ashe.png'> Ashe :: " + ashe);
document.write("<br><img src='img/Penelo.png'> Penelo :: " + penelo);
document.write("</h1><br>Group/Job composition not to your liking?<br><button onclick='aram()'>Try again</button></center>")
};