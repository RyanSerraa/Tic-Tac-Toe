var opcao = document.querySelectorAll('.item');
var escolha = document.querySelectorAll('.element');
var placar= document.querySelectorAll('.Placar_number')
var container=document.querySelector('.container')
count=1;
var x = 'X'
var o = 'O'
var result=[0,0]
var controll=0

  for (let i = 0; i < opcao.length; i++) {
  opcao[i].style.display='block'
   opcao[i].style.textAlign='center'
opcao[i].style.lineHeigth='50%'
opcao[i].style.fontSize='3em'
        
  opcao[i].addEventListener("click", function(event) {
    if (event.target.textContent == '') {
      if (count==1) {
         escolha[i].innerText=x
         
       opcao[i].textContent=`${escolha[i].textContent}`
        count=0
      } else {
        escolha[i].innerText=o
        opcao[i].innerText=`${escolha[i].textContent}`
        count=1
      }
      
      if ((opcao[0].textContent == x && opcao[1].textContent == x && opcao[2].textContent == x) ||
      (opcao[3].textContent == x && opcao[4].textContent == x && opcao[5].textContent == x) ||
      (opcao[6].textContent == x && opcao[7].textContent == x && opcao[8].textContent == x) ||
      (opcao[0].textContent == x && opcao[3].textContent == x && opcao[6].textContent == x) ||
      (opcao[1].textContent == x && opcao[4].textContent == x && opcao[7].textContent == x) ||
      (opcao[2].textContent == x && opcao[5].textContent == x && opcao[8].textContent == x) ||
      (opcao[0].textContent == x && opcao[4].textContent == x && opcao[8].textContent == x) ||
      (opcao[2].textContent == x && opcao[4].textContent == x && opcao[6].textContent == x)) {
        setTimeout(LimparGame,500) 
        count=1
        placar[0]=Number(placar[0].value)
        setTimeout(result[0]++,2100) // condição de corrida tratada com um sleep 
        placar[0].textContent=result[0]
        controll=0

 } else if ((opcao[0].textContent == o && opcao[1].textContent == o && opcao[2].textContent == o) ||
      (opcao[3].textContent == o && opcao[4].textContent == o && opcao[5].textContent == o) ||
      (opcao[6].textContent == o && opcao[7].textContent == o && opcao[8].textContent == o) ||
      (opcao[0].textContent == o && opcao[3].textContent == o && opcao[6].textContent == o) ||
      (opcao[1].textContent == o && opcao[4].textContent == o && opcao[7].textContent == o) ||
      (opcao[2].textContent == o && opcao[5].textContent == o && opcao[8].textContent == o) ||
      (opcao[0].textContent == o && opcao[4].textContent == o && opcao[8].textContent == o) ||
      (opcao[2].textContent == o && opcao[4].textContent == o && opcao[6].textContent == o)) {
         setTimeout(LimparGame,500)
         count=0
        setTimeout(result[1]++,2100) // condição de corrida tratada com um sleep 
        placar[1].textContent=result[1]
        controll=0
   }
   else{
    controll++
     if(controll===9){
      setTimeout(LimparGame,500)
  controll=0
      
    }
   }
  }});
} 
function LimparGame(){
  for(let c=0; c<9; c++){
    opcao[c].textContent=''
}
count=1}
