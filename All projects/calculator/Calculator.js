let displayEl=document.querySelector('.display');

function getinput(input){
    displayEl.value+=input;

}

function cleardisply(){
    displayEl.value='';
}

function calculate(){
    try{
        displayEl.value=eval(displayEl.value);
    }
    catch(e){
        displayEl.value='Error!';
    }
    
 
}