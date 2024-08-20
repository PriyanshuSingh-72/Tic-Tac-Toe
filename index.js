let turn = "X";
let box = document.getElementsByClassName("box");
let boxText = document.getElementsByClassName("boxText");
let gameover = false;
let button = document.querySelector("#reset");




const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}


const checkWin = ()=>{
    let boxText = document.getElementsByClassName("boxText");
    let win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e=>{
        if((boxText[e[0]].innerText ===boxText[e[1]].innerText)&& (boxText[e[2]].innerText ===boxText[e[1]].innerText)&& (boxText[e[0]].innerText !=="")){
            document.querySelector(".spaninfo").innerText = boxText[e[0]].innerText +" Won";
            gameover = true
        }
    })
}



Array.from(box).forEach(element=>{
    let boxText = element.querySelector(".boxText");
    element.addEventListener("click",()=>{
        if(boxText.innerText ==""){
            boxText.innerText = turn;
             turn = changeTurn();
             checkWin();
             if(!gameover){
                 document.querySelector(".spaninfo").innerText ="Turn of "+ turn;
                }

        }
    })
})


reset.addEventListener("click",(e)=>{
    Array.from(boxText).forEach(element=>{
        element.innerText = "";
       })
       document.querySelector(".spaninfo").innerText = "Turn of "+ turn;
    gameover = false;
       
})