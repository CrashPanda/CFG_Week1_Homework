///////// HOMEWORK /////////

/*
Create an interactive JavaScript program that is interesting for someone else to use.

You should:
+ Use console.log(), const, prompt and concatenation
+ Show effective use of // comments throughout your code
+ Share your program as a CodePen pen in slack

Bonus:
+ Use interpolation
+ Research and use alert or Math.random()
+ Share in slack a bug you had and how you fixed it (or ask for help if you
didn’t)
*/

// BUGS: Forgot to make a note of the errors that I was getting. But common ones off the top of my head were forgetting closing brackets, mispelling or using the wrong variables (e.g name, when I should have used surName), or remembering to add spaces when concatenating. 


// Console log - credit
console.log(`✩°｡⋆~ A short text adventure ~⋆｡°✩`);
console.log(`'Your Mission if You Chose To accept It' by Samantha Williams`);

// Math.random() - generating random number in range [min, max]
var time = randomNumber(2, 5);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set name
const surName = prompt(`Before the game starts. What was the last vegetable/fruit you ate?`);
const name = prompt(`Now, what is an adult name that isn't a good look on babies?`);

// Story - Tape message 
alert(`You open a draw. Within it, is a vintage reel to reel tape player. You hit the play switch.`);

alert(`Good morning, Mr. ` + surName + `.`); 


alert(`You're looking at a picture of Billy the Kid, taken yesterday. But Billy the Kid, died in 1881.

The Sheriff claimed that he killed Billy with his very own hands... 

...Or did he?`);


alert(`There have been a series of maulings across the city. As recent as last night. The crimes have his modus operandi bitten all over it.

Poor Mrs Cucamelon. The broad didn't stand a chance.`);


alert(`Your mission ${name}, should you choose to accept it, is to stop Billy's hooves in his tracks. 

As always, should you be caught or killed, the Gardener will disavow any knowledge of your actions. 

This tape will self-destruct in ${time} seconds. Good luck ${name}`);
