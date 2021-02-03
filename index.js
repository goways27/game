const user = document.getElementById("user");
const computer = document.getElementById("computer");
const com = ComputerValue();
const computerImg = document.getElementsByClassName("computerImg");

function ComputerValue(){
    let RandomNumber = Math.floor(Math.random()*3)+1;
    if(RandomNumber == 1){
        return "가위";
    } else if(RandomNumber == 2){
        return "바위";
    } else if(RandomNumber == 3){
        return "보";
    }
}

function rock(){
    let UserChoice = '바위'
    if (UserChoice == com){
        draw();
        document.getElementById('computerImg').src='computer_R.png';
    } else if (com == "보"){
        lose();
        document.getElementById('computerImg').src='computer_P.png';
    } else if (com == "가위"){
        win();
        document.getElementById('computerImg').src='computer_S.png';
    }
}

function scissors(){
    let UserChoice = '가위'
    if (UserChoice == com){
        draw();
        document.getElementById('computerImg').src='computer_S.png';
    } else if (com == "바위"){
        lose();
        document.getElementById('computerImg').src='computer_R.png';
    } else if (com == "보"){
        win();
        document.getElementById('computerImg').src='computer_P.png';
    }
}

function paper(){
    let UserChoice = '보'
    if (UserChoice == com){
        draw();
        document.getElementById('computerImg').src='computer_P.png';
    } else if (com == "가위"){
        lose();
        document.getElementById('computerImg').src='computer_S.png';
    } else if (com == "바위"){
        win();
        document.getElementById('computerImg').src='computer_R.png';
    }
}

function win(){
    user.innerHTML = "WIN";
    user.style.color = "red";
    user.style.backgroundColor = "rgba(255, 0, 0, 0.123)"
    computer.innerHTML = "LOSE";
    computer.style.color = "BLUE";
    computer.style.backgroundColor = "rgba(10, 87, 230, 0.205)"
    
}

function lose(){
    computer.innerHTML = "WIN";
    computer.style.color = "red";
    computer.style.backgroundColor = "rgba(255, 0, 0, 0.123)"
    user.innerHTML = "LOSE";
    user.style.color = "BLUE";
    user.style.backgroundColor = "rgba(10, 87, 230, 0.205)"
}

function draw(){;
    computer.innerHTML = "DRAW";
    user.innerHTML = "DRAW";
    computer.style.color = "red";
    computer.style.backgroundColor = "rgba(255, 0, 0, 0.123)"
    user.style.color = "red";
    user.style.backgroundColor = "rgba(255, 0, 0, 0.123)"
}