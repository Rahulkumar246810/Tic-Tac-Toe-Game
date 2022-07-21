console.log("Welcome to TIC TAC TOE");
let music= new Audio("music.mp3");
let audioturn= new Audio("ting.mp3");
let gameover= new Audio("gameover.mp3");
let turn = "X" ;
let isgameover=false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X" ? "0" : "X" ;
}

// Function to check for a win 
const checkwin1=()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,3,5,0],
        [3,4,5,3,15,0],
        [6,7,8,3,25,0],
        [0,3,6,-7,15,90],
        [1,4,7,3,15,90],
        [2,5,8,13,15,90],
        [0,4,8,3,15,45],
        [2,4,6,3,15,135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "  Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="300px";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "24vw";
            music.play();
        }
    })
}


// Game logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn =changeTurn();
            audioturn.play();
            // checkwin();
            check();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText ="Turn for " + turn;
            }
        }
    })
})

//Add onclick listner on reset
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText ="Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px";
    document.querySelector(".line").style.width = "0vw";
    music.pause();
})

function check(){
    let query= window.matchMedia("(max-width:800px)");

    if(query.matches){
        console.log("2");
        checkwin2();
    }
    else{
        console.log("Running");
        checkwin1();
    }

}


const checkwin2=()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
                            [0,1,2,3,14,0],
                            [3,4,5,3,44,0],
                            [6,7,8,3,74,0],
                            [0,3,6,-28,44,90],
                            [1,4,7,3,44,90],
                            [2,5,8,33,44,90],
                            [0,4,8,3,44,45],
                            [2,4,6,3,44,135],
                        ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "  Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="300px";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "85vw";
            music.play();
        }
    })
}