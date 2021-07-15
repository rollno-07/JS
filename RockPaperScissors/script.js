const game= ()=>{
    let pScore=0;
    let cScore=0;

  //start the game
    const startGame= ()=>{
        const playButton=document.querySelector(".intro button");
        const introScreen=document.querySelector(".intro");
        const match=document.querySelector(".match");

        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play Match
    const palyMatch= () => {
      const option=document.querySelectorAll(".option button");
      const playerHand=document.querySelector(".player-hand");
      const computerHand=document.querySelector(".computer-hand");
      const hands=document.querySelectorAll(".hands img");

      hands.forEach((hand) => {
          hand.addEventListener("animationend",function(){
              this.style.animation="";
          });
      });
      
      //computer Options
      const compterOption=["rock","paper","scissors"];

      option.forEach(option=>{
      option.addEventListener("click",function(){
          //computer Choice
        const computerNumber=Math.floor(Math.random()*3);
        const computerChoice=compterOption[computerNumber];
        setTimeout(()=>{
            //here is where we call compare hands
        compareHands(this.textContent,computerChoice);

        //update Images
        playerHand.src=`./assets/${this.textContent}.png`;
        computerHand.src=`./assets/${computerChoice}.png`;

        },2000)


       //Animation
        playerHand.style.animation="shakePlayer 2s ease";
        computerHand.style.animation="shakeComputer 2s ease";
      });
      });
    };
    const updateScore= ()=>{
        const playerScore=document.querySelector(".player-score p");
        const computerScore=document.querySelector(".computer-score p")
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
    }

     const compareHands =(playerChoice,computerChoice) =>{
         //update text
         const winner=document.querySelector(".winner");
         //checking tie
         if(playerChoice===computerChoice){
             winner.textContent="It is a tie";
             return;
         }
         //check for Rock
         if(playerChoice==="rock"){
             if(computerChoice==="scissors"){
                 winner.textContent="Player Wins";
                 pScore++;
                 updateScore();
                 return;
             }
             else{
                 winner.textContent="Computer Wins";
                 cScore++;
                 updateScore();
                 return;
             }
         }
         //check for paper
         if(playerChoice==="paper"){
            if(computerChoice==="scissors"){
                winner.textContent="Computer Wins";
                cScore++;
                 updateScore();
                return;
            }
            else{
                winner.textContent="Player Wins";
                pScore++;
                 updateScore();
                return;
            }
        }
        //check for scissors
        if(playerChoise==="scissors"){
            if(computerChoice==="rock"){
                winner.textContent="Computer Wins";
                cScore++;
                 updateScore();
                return;
            }
            else{
                winner.textContent="Player Wins";
                pScore++;
                 updateScore();
                return;
            }
        }
         
     }
    //call all inner funtion
    startGame();
    palyMatch();
    compareHands();
    updateScore()

};
//start game function
game();