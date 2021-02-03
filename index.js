function prn(e){
    document.write("<h1>"+ e +"</h1>")
}

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

let com = ComputerValue();

function Result(){
       if (User == com){
            prn('비겼습니다.');
        }else if (User == "가위" && com == "보"){
            prn('이겼습니다.');
        }else if (User == "가위" && com == "바위"){
            prn('졌습니다.');
        }else if (User == "바위" && com == "보"){
            prn('졌습니다.');
        }else if (User == "바위" && com == "가위"){
            prn('이겼습니다.');
        }else if (User == "보" && com == "바위"){
            prn('이겼습니다.');
        }else if (User == "보" && com == "가위"){
            prn('졌습니다.');
        }   
    data();
    }

    let User = prompt('가위, 바위, 보 중 하나를 입력하세요.');
    Result();

function data(){
    prn('당신이 낸 것은 <' + User + '> 군요.');
    prn('컴퓨터는 <' + com +'> 랍니다.');
}