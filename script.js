
//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      author: "Churchill",
      year: 1940,
      yearIsBCE: false,
      authorAge: '66'
    };

var ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    };

var demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    };
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

document.getElementById('BtnDonate').addEventListener('click', function(){
  var answer = window.prompt("Which author is your favorite?");
  switch (answer) {

      case "Churchill" :
      console.log( "This speech was written by Churchill in 1940." );
      break;

      case "Ghandi" :
      console.log( "This speech was written by Ghandi in 1942." );
      break;

      case "Demosthenes" :
      console.log( "This speech was written by Demosthenes in 342." );
      break;

      default:
      console.log("Please double check the spelling of the author.");
      break;
  }
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  console.log ("This speech was written by " + churchillSpeech.author + " in " + churchillSpeech.year + " ");

  if (churchillSpeech.yearBCE === true)
  console.log ("This speech took place before the common era.");
  else console.log ("This speech took place during the common era.");

  if (churchillSpeech.year > ghandiSpeech.year && churchillSpeech.year > demosthenesSpeech.year)
  console.log ("This is the most recent speech on the page.");
  else console.log ("This is the oldest speech on the page.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  console.log ("This speech was written by " + ghandiSpeech.author + " in " + ghandiSpeech.year + " ");
  if (ghandiSpeech.yearBCE === true)
  console.log ("This speech took place before the common era.");
  else console.log ("This speech took place during the common era.");

  if (ghandiSpeech.year > churchillSpeech.year && ghandiSpeech.year > demosthenesSpeech.year)
  console.log ("This is the most recent speech on the page.");
  else console.log ("This is the oldest speech on the page.");
  //Code in here executes when the user clicks the "Ghandi" button.
});


document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  console.log ("This speech was written by " + demosthenesSpeech.author + " in " + demosthenesSpeech.year + " ");
  if (demosthenesSpeech.yearBCE === true)
  console.log ("This speech took place before the common era.");
  else console.log ("This speech took place during the common era.");

  if (demosthenesSpeech.year > churchillSpeech.year && demosthenesSpeech.year > ghandiSpeech.year)
  console.log ("This is the most recent speech on the page.");
  else console.log ("This is the oldest speech on the page.");
  //Code in here executes when the user clicks the "Demosthenes" button.
});


var user = window.prompt("What is your user name?");

if ( user === "") { user = "I'll just call you User"}

console.log( "Hello, " + user + "!" );