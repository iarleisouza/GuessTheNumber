let computerNumber;
let userNumbers = [];
let attempts = 0;

function init() {
    computerNumber = Number(Math.floor(Math.random() * 100 + 1));
    console.log(computerNumber);
}


function compareNumbers() {
     let userNumber = Number(document.getElementById('inputBox').value);
    if (userNumber > 100) {
        alert('Digite um valor até 100!');
        document.getElementById('inputBox').value = '';
        attempts--;

    } else {
        userNumbers.push(' ' + userNumber);
    }

     

    //console.log(userNumber);

     document.getElementById('guesses').innerHTML = userNumbers;
     attempts++;
     console.log(attempts);
   

     if (userNumber > computerNumber && attempts <= 4) {
       document.getElementById('textOutput').innerHTML = "Your number is too High!";
       document.getElementById('attempts').innerHTML = attempts;
       //document.getElementById('inputBox').setAttribute('Readonly', 'Readonly');
       document.getElementById('inputBox').value = '';
      

     } else if (userNumber < computerNumber && attempts <= 4) {
       document.getElementById('textOutput').innerHTML = "Your number is too Low!";
       document.getElementById('attempts').innerHTML = attempts;
        //document.getElementById('inputBox').setAttribute('Readonly', 'Readonly');
       document.getElementById('inputBox').value = '';
      

     } else if (userNumber == computerNumber && attempts <= 4){
       document.getElementById('textOutput').innerHTML = "Congratulations!!!!"
       document.getElementById('attempts').innerHTML = attempts;
        //document.getElementById('inputBox').setAttribute('Readonly', 'Readonly');
       inputBox.disabled = true;
      
    

     } else {
       
        document.getElementById('textOutput').innerHTML = "Número de tentativas excedidas. GAME OVER!!!";
        document.getElementById('attempts').innerHTML = attempts;
         //document.getElementById('inputBox').setAttribute('Readonly', 'Readonly');
        inputBox.disabled = true;
        
     
        
     }
    
}

function newGame() {
   window.location.reload();
}