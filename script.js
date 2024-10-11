let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game Was Draw.");
    let massage = document.querySelector("#msg");
    massage.innerText = "Its A Draw.";
    massage.style.backgroundColor = "grey";

};

const scroring = (userWin) => {

    if(userWin === true)
    {
        userscore++;
        let abc = document.querySelector("#user-score");
        abc.innerText = userscore;
    }

    else
    {
        compscore++;
        let xyz = document.querySelector("#comp-score");
        xyz.innerText = compscore;
    }
};

const playGame = (userChoice) => {
    console.log("choice was clicked = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice===compChoice){
        //Draw Game
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            //Scissors,paper
            userWin = compChoice === "paper" ? false : true; 
        }

        if(userChoice === "paper")
        {
            //Scissors,rock
            userWin = compChoice === "scissors" ? false : true;
        }

        if(userChoice === "scissors")
        {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }

        scroring(userWin);

        let massage = document.querySelector("#msg");
        

        if(userWin === true)
        {
            massage.innerText = "You Win " + userChoice + " beats " + compChoice;
            massage.style.backgroundColor = "green";
        }

        else
        {
            massage.innerText = "You Lose " + compChoice + " beats " + userChoice;
            massage.style.backgroundColor = "Red";
        }


    }

    

};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});