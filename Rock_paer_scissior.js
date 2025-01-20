
        let Score = JSON.parse(localStorage.getItem('score')) || {
            wins:0,
            loose:0,
            ties:0
        }
updateScore();


       function updateScore(){
        document.querySelector('.js-score').innerHTML=`wins: ${Score.wins}, loose: ${Score.loose}, Tie; ${Score.ties}`;
       }

      

     
         function computerMove(){
          const Random=Math.random();
    
          let computermove ='';

    if(Random>=0 && Random <1/3){
        computermove='Rock';

    } else if(Random >=1/3 && Random <2/3){
        computermove='Paper';

    }else if(Random >=2/3 && Random <1){
        computermove='Scissior';
    }
    return computermove;
         }

         function Playgame(playermove){
            const computermove=computerMove();
          let Result='';
          if(playermove=='Scissior'){
 if(computermove=== 'Rock'){
    Result='You loose';
 }else if(computermove==='Scissior'){
    Result='Tie.';

 }else if(computermove==='Paper'){
    Result='You win';
 }
}

else if (playermove=='Paper'){
  
 if(computermove=== 'Rock'){
    Result='You win';
 }else if(computermove==='Scissior'){
    Result='You loose';

 }else if(computermove==='Paper'){
    Result='Tie.';
 }
}

else if(playermove=='Rock'){
   if(computermove=== 'Rock'){
    Result='Tie.';
 }else if(computermove==='Scissior'){
    Result='You win';

 }else if(computermove==='Paper'){
    Result='You loose';
 }
}

if(Result==='You win'){
    Score.wins+=1;
} else if (Result==='You loose'){
    Score.loose+=1;

} else if (Result==='Tie.'){
    Score.ties+=1;
}


localStorage.setItem('score',JSON.stringify(Score));
updateScore();

document.querySelector('.js-result')
.innerHTML=Result;

document.querySelector('.js-move')
.innerHTML=`You
    <img src="${playermove}-emoji.png" alt="" class="Move">
    <img src="${computermove}-emoji.png" alt="" class="Move">
    computer`;

         }
