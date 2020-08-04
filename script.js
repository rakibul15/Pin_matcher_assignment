// let oneBtn = document.getElementById('calc-one');
// let twoBtn = document.getElementById('calc-two');
// let threeBtn = document.getElementById('calc-three');
// let fourBtn = document.getElementById('calc-four');
// let fiveBtn = document.getElementById('calc-five');
// let sixBtn = document.getElementById('calc-six');
// let sevenBtn = document.getElementById('calc-seven');
// let eightBtn = document.getElementById('calc-eight');
// let nineBtn = document.getElementById('calc-nine');


// let zeroBtn = document.getElementById('calc-zero');
let showPin= document.getElementById('showPin');
let unmatched=document.getElementById('unmatched');
let matched=document.getElementById('matched');
let pinGenerate = document.getElementById('pinGenerate');
let clearBtn = document.getElementById('clear');
let backSpace = document.getElementById('backSpace');
let displayElement = document.getElementById('display');
let number = document.getElementsByClassName('number');//number class 0-9
let check = document.getElementById('checked');
let trail = document.getElementById('try');
let tryText =document.getElementById('tryText');


//Hide some display property
function hidefirst(){
  tryText.style.display="none";
  unmatched.style.display = "none";
  matched.style.display = "none";
}

hidefirst();



//Generate Pin
pinGenerate.addEventListener('click',function(){
  let pin = Math.ceil(1000 + Math.random() * 9000);
  showPin.value = pin;
  enable();//enable submit Button
  hidefirst();//Hide some display property
   displayElement.value='';
});


//Input Number from keyboard
for( let i=0; i<number.length; i++){
  number[i].addEventListener('click',function(e){
    let btnText=e.target.innerText;
    displayElement.value+=btnText;
  });
}

//Clear
clearBtn.addEventListener('click',function(){
  displayElement.value='';
})

//Backspace
backSpace.addEventListener('click',function(){
  let earsed = document.getElementById('display').value;
  let lastErased = earsed.slice(0, earsed.length - 1);
  document.getElementById('display').value = lastErased;
})


//Check Match and Unmatched
check.addEventListener('click', function(){
  if(displayElement.value=='' || showPin.value=='' ){
    alert("Hey Generate Pin Or Put Input Value");
  }
  else if (showPin.value  == displayElement.value) {
    matched.style.display = "block";
    unmatched.style.display = "none";
    displayElement.value='';
    tryText.style.display="none";
    document.getElementById('try').innerText =3;
    showPin.value ='';
} else {
    unmatched.style.display = "block";
    matched.style.display = "none";
    trialCount();
    displayElement.value='';
    tryText.style.display="block";
}
})

function trialCount() {
  let trials = trail.innerHTML;
  trail.innerText -= 1;
  if (trials == "1") {
      disableButton()
  }
}

function disableButton() {
  check.style.opacity = 0.4;
  check.setAttribute('disabled', '');
  check.removeAttribute("enabled", "");
}

function enable(){
  check.style.opacity =1;
  check.setAttribute("enabled", "");
  check.removeAttribute("disabled", "");
  document.getElementById('try').innerText =3;
}



