let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userpara=document.querySelector("#your-score");
const comppara=document.querySelector("#comp-score");

const showwinner=(userwin,comchoice)=>{
    if(userwin){
        console.log("you won");
        msg.innerText = `Computer choose ${comchoice} you won`;
        userscore++;
        userpara.innerText=userscore;
    }
    else{
        console.log("you lose");
        msg.innerText = `Computer choose ${comchoice} you lose`;
        compscore++;
        comppara.innerText=compscore;
    }
};

const computerchoice=()=>{
    let options= ["rock", "paper", "scissors"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
};

const drawgame=()=>{
    msg.innerText = "Game was Draw. Play again.";
};

const playgame=(userchoice)=>{
    console.log("your choice is",userchoice);
    let comchoice=computerchoice();
    let userwin =true;
    console.log("Computer choice is",comchoice);
    if(userchoice==comchoice){
        drawgame();
    }
    else{
        if(userchoice==="rock"){
            //scisors paper
           userwin= comchoice==="paper"?false:true;
        }
        else if(userchoice==="scissors"){
            userwin= comchoice==="rock"?false:true;
        }
        else{
            userwin= comchoice==="rock"?true:false;
        }
        showwinner(userwin,comchoice);
    }
    
    //follow up pass userchoice and comchoice with showwinner function and update it at msg box
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceid=choice.getAttribute("id");
        playgame(choiceid);
    });
});