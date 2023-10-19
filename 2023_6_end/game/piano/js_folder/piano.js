let score = document.querySelector('#score');
let main = document.querySelector('.main');
let board = document.querySelector('.board');
let start_button = document.querySelector('#start_button');
console.log(score);
console.log(main);
console.log(board);
console.log(start_button);


var flag = 0;
start_button.addEventListener('click', game_running);

board.addEventListener('click', function (e) {
    let li = e.target;
    if(li.classList.contains('board')){return;}
    else{
        li.remove();
        add_score();
    }
})

function game_running(){
   
    var timer = null;
    
    

    if(start_button.innerHTML == '開始遊戲' && flag ==0){
        start_button.innerHTML = '結束遊戲';
        flag = 1;
        score.value = 0;
        score.innerHTML = `${score.value}`;
        var timer = setInterval(function(){
            item_drop();
            board.appendChild(creat_board());
            
            if(flag == 0){
                clearInterval(timer);
                board.innerHTML = "";
            }

        }, 800);
        timer;
        
    }
    else if(start_button.innerHTML == '結束遊戲' && flag == 1){
        start_button.innerHTML = '開始遊戲';
        
     
        flag = 0;
    }
    

    function item_drop(){
        

        var temp = document.querySelectorAll('.board div');
        console.log(temp.length);
        for(var i = 0; i < temp.length; i++){
            //console.log(`${i}:${temp[i].style.top}`);
            temp[i].style.top = temp[i].offsetTop + (board.offsetHeight/10) + "px";
            if(temp[i].offsetTop >= board.offsetHeight){
                flag = 0;
                start_button.innerHTML = '開始遊戲';
            }
        }
    }

    function creat_board(){
        var temp = document.createElement('div');
        temp.style.top = "0px";
        
        temp.style.left = Math.floor(Math.random()*10)*board.offsetWidth/10 + "px";
        
        return temp;
    }

 

    


}

function add_score(e){
    console.log(`Before:${score.value}`);
    score.value = score.value + 100;
    score.innerHTML = `${score.value}`;
    console.log(`After:${score.value}`);
    
}
