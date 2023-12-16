
var mod_game = document.querySelector("#mod_game");
var mod = document.querySelectorAll(".mod");
var opcao = document.querySelectorAll('.item');
var escolha = document.querySelectorAll('.element');
var placar= document.querySelectorAll('.Placar_number')
var container=document.querySelector('.container')
count=1;
var x = 'X'
var o = 'O'
var result=[0,0]
var controll=0
mod[0].addEventListener('click', function(){
  mod_game.style.display = "none";
  container.style.display = "grid";

  if (count === 1) {
      for (let i = 0; i < opcao.length; i++) {
          opcao[i].style.display = 'block';
          opcao[i].style.textAlign = 'center';
          opcao[i].style.lineHeight = '100%';
          opcao[i].style.fontSize = '3em';

          opcao[i].addEventListener('click', function(event) {
              if (event.target.textContent == '') {
                  if (count === 1) {
                      escolha[i].innerText = x;
                      opcao[i].textContent = escolha[i].textContent;
                      count = 0;
                  }
                  robo_jogada();
              }
          });
      }
  }
});

function robo_jogada() {
    if ((opcao[0].textContent === x || opcao[2].textContent === x || opcao[6].textContent === x || opcao[8].textContent === x ||(opcao[1].textContent==x)||(opcao[7].textContent==x)) &&(opcao[4].textContent == '')) {
        escolha[4].innerText = o;
        opcao[4].textContent = `${escolha[4].textContent}`
  } else if (opcao[4].textContent === x && opcao[0].textContent=='') {
      escolha[4].innerText = o;
      opcao[0].innerText = `${escolha[4].textContent}`;
  }
 
  else if ((opcao[1].textContent === x || opcao[3].textContent === x || opcao[5].textContent === x || opcao[7].textContent === x) &&opcao[4].textContent === '' ){
        opcao[0].textContent=o
  }
  
  else if ((opcao[1].textContent == x && (opcao[6].textContent == x || opcao[8].textContent == x))||(opcao[7].textContent == x && (opcao[0].textContent == x || opcao[2].textContent == x)) && opcao[3].textContent=='') {
    opcao[3].textContent = o
}

else if ((opcao[1].textContent==x && (opcao[6].textContent==x && opcao[5].textContent==x))||(opcao[7].textContent==x && (opcao[0].textContent==x && opcao[5].textContent==x))&& opcao[2].textContent==''){
    opcao[2].textContent=o
}
  else{
    for(let j=1; j<=8; j ++ ){
  
            i=0
            if((j==1||j==3||j==4) && (i ==0 && opcao[j*2].textContent=='') &&(opcao[i].textContent==x && opcao[j].textContent==x)){
                j*=2
                opcao[j].textContent=o
                break;
            }
            if((j==2||j==6||j==8) && (i ==0 && opcao[j/2].textContent=='') &&(opcao[i].textContent==x && opcao[j].textContent==x)){
                j/=2
                opcao[j].textContent=o
                break;
    
            }
            i=1
            if((i==1 && j==4 ) && (opcao[7].textContent=='')&&(opcao[i].textContent==x && opcao[j].textContent==x)){
                opcao[7].textContent=o
                break
            }
            if((i==1 && j==2 ) && (opcao[0].textContent=='')&&(opcao[i].textContent==x && opcao[j].textContent==x)){
                opcao[0].textContent=o
                break
            }
            if((i==2 && j==5 ) && (opcao[8].textContent=='')&&(opcao[i].textContent==x && opcao[j].textContent==x)){
                opcao[7].textContent=o
                break
            }
            i=2
            if((i==2 && j==4 ) && (opcao[6].textContent=='')&&(opcao[i].textContent==x && opcao[j].textContent==x)){
                opcao[6].textContent=o
                break
            }
            if((i==2 && j==5 ) && (opcao[8].textContent=='')&&(opcao[i].textContent==x && opcao[j].textContent==x)){
                opcao[8].textContent=o
                break
            }
            if((i==2 && j==8 ) && (opcao[5].textContent=='')&&(opcao[i].textContent==x && opcao[j].textContent==x)){
                opcao[5].textContent=o
                break
            }
            i=3
            if((i==3 && j==4 ) && (opcao[5].textContent=='')&&(opcao[i].textContent==x && opcao[j].textContent==x)){
                opcao[5].textContent=o
                break
            }
            if((i==3 && j==6 ) && (opcao[0].textContent=='')&&(opcao[i].textContent==x && opcao[j].textContent==x)){
                opcao[0].textContent=o
                break
            }
           
            i=6
            if((i==6 && j==7 ) && (opcao[8].textContent=='')&&(opcao[i].textContent==x && opcao[j].textContent==x)){
                opcao[8].textContent=o
                break
            }
            if((i==6 && j==8 ) && (opcao[7].textContent=='')&&(opcao[i].textContent==x && opcao[j].textContent==x)){
                opcao[7].textContent=o
                break
            }
            if((i==6 && j==4 ) && (opcao[2].textContent=='')&&(opcao[i].textContent==x && opcao[j].textContent==x)){
                opcao[2].textContent=o
                break
            }
            i=7
            if((i==7 && j ==8) &&(opcao[6].textContent=='')&&(opcao[i].textContent==x && opcao[j].textContent==x)){
                opcao[6].textContent=o
                break
            }
            if((i==7 && j ==1) &&(opcao[4].textContent=='')&&(opcao[i].textContent==x && opcao[j].textContent==x)){
                opcao[4].textContent=o
                break
            }
            i=8
            if((i==8 && j==5 ) && (opcao[2].textContent=='')&&(opcao[i].textContent==x && opcao[j].textContent==x)){
                opcao[2].textContent=o
                break
            }
            

           

            
            
        }

    }
    Verificar_vencedor()

  count=1
  }




mod[1].addEventListener('click',function(){ 
  mod_game.style.display="none" 
  container.style.display="grid" 
  for (let i = 0; i < opcao.length; i++) { 
      opcao [i].style.display='block' 
      opcao[i].style.textAlign='center' 
      opcao[i].style.lineHeigth='50%' 
      opcao[i].style.fontSize='3em' 
      opcao[i].addEventListener("click", function(event) { 
          if (event.target.textContent == '') { 
              if (count==1) { 
                  escolha[i].innerText=x 
                  opcao[i].textContent= `${escolha[i].textContent}` 
                  count=0 }
                   else {
                      escolha[i].innerText = o;
                      opcao[i].innerText = escolha[i].textContent;
                      count = 1;
                  }
                  Verificar_vencedor();
              }
          });
      }
    });
function Verificar_vencedor(){
    if ((opcao[0].textContent === x && opcao[1].textContent === x && opcao[2].textContent === x) ||
    (opcao[3].textContent === x && opcao[4].textContent === x && opcao[5].textContent === x) ||
    (opcao[6].textContent === x && opcao[7].textContent === x && opcao[8].textContent === x) ||
    (opcao[0].textContent === x && opcao[3].textContent === x && opcao[6].textContent === x) ||
    (opcao[1].textContent === x && opcao[4].textContent === x && opcao[7].textContent === x) ||
    (opcao[2].textContent === x && opcao[5].textContent === x && opcao[8].textContent === x) ||
    (opcao[0].textContent === x && opcao[4].textContent === x && opcao[8].textContent === x) ||
    (opcao[2].textContent === x && opcao[4].textContent === x && opcao[6].textContent === x)) {
    setTimeout(LimparGame, 500);
    count = 1;
    result[0]++;
    placar[0].textContent = result[0];
    controll = 0;
} else if ((opcao[0].textContent === o && opcao[1].textContent === o && opcao[2].textContent === o) ||
    (opcao[3].textContent === o && opcao[4].textContent === o && opcao[5].textContent === o) ||
    (opcao[6].textContent === o && opcao[7].textContent === o && opcao[8].textContent === o) ||
    (opcao[0].textContent === o && opcao[3].textContent === o && opcao[6].textContent === o) ||
    (opcao[1].textContent === o && opcao[4].textContent === o && opcao[7].textContent === o) ||
    (opcao[2].textContent === o && opcao[5].textContent === o && opcao[8].textContent === o) ||
    (opcao[0].textContent === o && opcao[4].textContent === o && opcao[8].textContent === o) ||
    (opcao[2].textContent === o && opcao[4].textContent === o && opcao[6].textContent === o)) {
    setTimeout(LimparGame, 500);
    count = 0;
    result[1]++;
    placar[1].textContent = result[1];
    controll = 0;
} else {
    controll++;
    if (controll === 9) {
        setTimeout(LimparGame, 500);
        controll = 0;
    }
}
    }
    function LimparGame() {
      for (let c = 0; c < 9; c++) {
          opcao[c].textContent = '';
      }
    }


