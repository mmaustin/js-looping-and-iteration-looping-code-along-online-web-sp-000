function writeCards(names, bday){
    const array = []; {
    for(let i = 0; i < names.length; i++){
      array.push(`Thank you, ${names[i]}, for the wonderful ${bday} gift!`);
      }
    }
    return array;
  }
  
  console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));

  function countDown(number){
    while(number >= 0){
      console.log(number);
      number--;
    }
  }
  countDown(10)