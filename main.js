var playerWin=0;
var pcWin=0;

if(document.getElementById('playerCount').innerHTML==='Player Score : '){
    document.getElementById('resetButton').hidden = true;
}

function myTurn(choice){
    console.log('choice = '+choice);
    return choice;
}
function pcTurn(){
    let pcChoice = Math.floor(Math.random() * 3);
    if(pcChoice ===0){
        return 'rock';
    }
    else if(pcChoice ===1){
        return 'paper';
    }
    else if(pcChoice===2){
        return 'scissors';
    }
}

function winner(player,pc){
    if(player===pc){
        return 'DRAW';
    }
    else{
        if(player==='rock'){
            if(pc==='paper'){
                pcWin++;
                return 'PC WON';
            }else if(pc==='scissors'){
                playerWin++;
                return 'PLAYER WON';
            }
        }
        else if(player==='paper'){
            if(pc==='rock'){
                playerWin++;
                return 'PLAYER WON';
            }else if(pc==='scissors'){
                pcWin++;
                return 'PC WON';
            }
        }else if(player==='scissors'){
            if(pc==='rock'){
                pcWin++;
                return 'PC WON';
            }else if(pc==='paper'){
                playerWin++;
                return 'PLAYER WON';
            }
        }
    }
}

function game(choice){
    document.getElementById('resetButton').hidden = false;
    let userChoice = myTurn(choice);
    let pcChoice = pcTurn();

    console.log('pc choice '+pcChoice);

    let result = winner(userChoice,pcChoice);

    if(pcChoice==='rock'){
        document.getElementById('pcImage').hidden =false;
        document.getElementById('pcImage').src = 'tas.png';
    }else if(pcChoice==='paper'){
        document.getElementById('pcImage').hidden =false;
        document.getElementById('pcImage').src = 'kagt.png';
    }else if(pcChoice==='scissors'){
        document.getElementById('pcImage').hidden =false;
        document.getElementById('pcImage').src = 'makas.png';
    }

    if(userChoice==='rock'){
        document.getElementById('userImage').hidden =false;
        document.getElementById('userImage').src = 'tas.png';
    }else if(userChoice==='paper'){
        document.getElementById('userImage').hidden =false;
        document.getElementById('userImage').src = 'kagt.png';
    }else if(userChoice==='scissors'){
        document.getElementById('userImage').hidden =false;
        document.getElementById('userImage').src = 'makas.png';
    }



    

    document.getElementById('result').innerHTML = result;
    document.getElementById('playerCount').innerHTML = 'Player Score : '+playerWin;
    document.getElementById('pcCount').innerHTML = 'Pc Score : '+pcWin;
    

}

function reset(){
    location.reload();
}
