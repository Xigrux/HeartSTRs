var gamePort = document.querySelector("#gamePort");

var cursorArray = ['url("http://jantimon.nl/running_man/running_man_1.cur"), auto',
                   'url("http://jantimon.nl/running_man/running_man_2.cur"), auto',
                  'url("http://jantimon.nl/running_man/running_man_3.cur"), auto',
                  'url("http://jantimon.nl/running_man/running_man_4.cur"), auto',
                  'url("http://jantimon.nl/running_man/running_man_5.cur", auto'];
i = 0;
(function cursor(){
  gamePort.style.cursor  = cursorArray[i];
  i++;
  if(i == cursorArray.length){
    i = 0; 
  }
   setTimeout(cursor, 50);
})();
console.log ('we have cursor');