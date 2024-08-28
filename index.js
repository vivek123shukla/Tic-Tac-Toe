console.log("Welcome to gameing ");
let box=document.querySelectorAll('.box');
let info=document.getElementById('turn');
let music=new Audio('music.mp3');
let song=new Audio('let.mp3');
let turn="X";
let turns=()=>{
  return turn==="X"?"0":"X";
}

let check=false;
Array.from(box);
box.forEach(function(e){
        e.addEventListener('click',()=>{
            e.innerHTML=turn;
            checkWin();
            music.play();
            turn=turns();
            song.play();
            if(!check){
                info.innerHTML="Turn for "+turn;
            }
           })      
},)

let checkWin=()=>{
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
   let box=document.querySelectorAll('.box');
  win.forEach((e)=>{

          if((box[e[0]].innerHTML===box[e[1]].innerHTML)&&(box[e[2]].innerHTML===box[e[1]].innerHTML)&&box[e[0]].innerHTML!=="") {
            info.innerHTML=box[e[0]].innerHTML+' is Win';
            check=true;
            }   
  })       
}

let reset =document.querySelector('.reset');
reset.addEventListener('click',()=>{
    box.forEach((e)=>{
        e.innerHTML="";
        check=false;
    })
})