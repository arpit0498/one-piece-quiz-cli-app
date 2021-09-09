const chalk = require('chalk');
var readlineSync = require('readline-sync');
var score = 0;

const heading= chalk.italic.black.underline.bgYellow ;
const greet =chalk.bold.yellow ;
const hw= chalk.bold.black.bgRed ;
const hc= chalk.bold.black.bgGreen ;

console.log(heading('ONE-PIECE QUIZ'));
console.log('                      ');


var userName = readlineSync.question (console.log(greet('Before we start to play, please let me know your name? ')));
console.log('                      ');

console.log(greet("Welcome "+userName.toUpperCase() +" !,Let's check how well do you know about ONE-PIECE?"));

console.log(chalk.green("-------------------------------------------"));

var questionList = [
	question1 = {
		question: "Which pirate once owned one piece?  ",
		answer:"Gol d roger",
	},
	question2 = {
		question: "Warlord is a group consisting of how many members?   ",
		answer:"7",

	},
	question3 ={
		question: "Who promised that they would never lose another fight until they defeated a certain someone?  ",
		answer:"zoro",

	},
	question4 = {
		question: "Who was the first member of the Straw Hat crew to try and recruit a new member besides Luffy?  ",
		answer:"nami",

	},
	question5 = {
		question: "Who was the first villain to defeat Luffy?  ",
		answer: "crocodile",
	},
	question6 = {
		question: "Who was the first woman to kiss Luffy? ",
		answer: "reiju",
	},
	question7 = {
		question: "Who was the first Admiral to be shown in the series?  ",
		answer: "aokiji",
	},
	question8 = {
		question: "Who gave Shanks the scar on his eye?  ",
		answer: "blackbeard",
	},
	question9 = {
		question: "from which pirate? luffy got his straw hat  ",
		answer: "Shanks",
	},
	question10 ={
    question:"How old is Luffy after the time skip?  ",
    answer:"19"
  }


];

function play(question, answer){
	var playerAnswer = readlineSync.question(question);

	if(playerAnswer.toLowerCase() === answer.toLowerCase()){
		score++;
		console.log(hc("well done!"));
		console.log("Your Score: ",score);

	}
	else{
		console.log(hw("You are wrong!"));
    console.log("Correct answer is :" , answer);
    console.log("Remember it for the next time!!!");
		console.log("Your Score: ",score);
	}
	console.log(chalk.green("-------------------------------------------"));
}


for(var i=0; i<questionList.length; i++){
	var q = questionList[i].question;
	var a = questionList[i].answer;
	play(q,a);
}

console.log(heading("Your Final Score is: "),score);
	console.log(heading("Thank you for Playing!!"));