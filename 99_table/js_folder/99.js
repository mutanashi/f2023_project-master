

var input1 = document.querySelector("#input1");
console.log(input1);

let input2 = document.querySelector("#input2");
console.log(input2);

let btn = document.querySelector("#insert_btn");
console.log(btn);


btn.addEventListener("click", move1);
let goal_head = document.querySelector("#goal_head");
let goal_body = document.querySelector("#goal_body");





function move1(){
    document.documentElement.style.setProperty('--base', `${input2.value + 1}`);
    var flag1 = 0;
    var flag2 = 0;

    if(input1.value <= 0){
        flag1 = 1;
    }
    if(input2.value <= 0){
        flag2 = 1;
    }
    
    console.log(input1.value);
    if( flag1 || flag2){
        var output = "";
        if(flag1 && flag2){
            output += "n1 、 n2 有誤";
        }
        else if(flag1){
            output += "n1 有誤";
        }
        else{
            output += "n2 有誤";
        }
        goal_body.innerHTML = "<td>qq</td>";
        window.confirm(output);
        return;
    }
    //head control
    goal_head.children[0].innerHTML = `<th></th>`;

    for(var j = 1; j <= input2.value; j++){
        goal_head.children[0].innerHTML += `<th>${j}</th>`;
    }
    
    //body control
    goal_body.innerHTML = "";
    
    for(var i = 1; i <= input1.value ; i++){
        goal_body.innerHTML += `<tr></tr>`;
        goal_body.children[i - 1].innerHTML += `<td>${i}</td>`;
        for(var j = 1; j <= input2.value; j++){
           goal_body.children[i - 1].innerHTML += `<td>${i*j}</td>`;
        }
    }
}