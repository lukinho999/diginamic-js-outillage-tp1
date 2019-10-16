exports.numbers = function () {
    var nbre=0;
    for(i=1; i<100; i++){
        nbre=i;
        console.log(nbre+'<br />');
    }
    
  }
  exports.even = function () {
    var nbre = 0;
    for(i=2; i<100; i=i+2){
        nbre= i;
        console.log(nbre+'<br />');
    }
  }
  exports.odd = function () {
    var nbre = 0;
    for(i=1; i<100; i=i+2)
    {
      nbre = i;
      console.log(nbre+'<br />');
    }
    
  }