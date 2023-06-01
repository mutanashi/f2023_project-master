
var amount = 0;
var screen_type = 0; //0:show amount 1:show change amount
var operate_type = 0; // 0: = 1:/ 2:* 3:+ 4:-
function add_num(click_num){
    if (screen_type == 0){
        screen_type = 1;
        amount = Number(document.getElementById("screen").value);
        document.getElementById("screen").value = "";
    }
    
    document.getElementById("screen").value += click_num.value;
   
}

function operate(operate_num){
    if (screen_type == 0){
        operate_type = operate_num;
    }
    else{
        switch (operate_type) {
            case 0:
                amount = Number(document.getElementById("screen").value);
                console.log("0:");
                console.log(amount);
                break;
            case 1:
                amount /= Number(document.getElementById("screen").value);
                console.log("1:");
                console.log(amount);
                break;
            case 2:
                amount *= Number(document.getElementById("screen").value);
                console.log("2:");
                console.log(amount);
                break;
            case 3:
                amount += Number(document.getElementById("screen").value);
                console.log("3:");
                console.log(amount);
                break;
            case 4:
                amount -= Number(document.getElementById("screen").value);
                console.log("4:");
                console.log(amount);
                break;
        }
        document.getElementById("screen").value = eval(amount);
        screen_type = 0;
        operate_type = operate_num;
        console.log(amount);
    }
}

function clears(){
    document.getElementById("screen").value = "";
    amount = 0;
    screen_type = 0;
    operate_type = 0;
}

function show_value(){
    if(screen_type == 1){
        switch (operate_type) {
            case 0:
                amount = Number(document.getElementById("screen").value);
            case 1:
                amount /= Number(document.getElementById("screen").value);
                break;
            case 2:
                amount *= Number(document.getElementById("screen").value);
                break;
            case 3:
                amount += Number(document.getElementById("screen").value);
                break;
            case 4:
                amount -= Number(document.getElementById("screen").value);
                break;
        }
    }
    operate_type = 0;
    screen_type = 0;
    console.log(amount);
    document.getElementById("screen").value = eval(amount);
    amount = 0;
    
}


