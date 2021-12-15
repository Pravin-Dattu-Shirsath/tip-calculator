






function tipcalcy(){
   
    let amount = Number(document.getElementById('billamount').value) ;
 
   
  let person = Number(document.getElementById("person").value) ;
   
   
   let perc = Number ( document.getElementById('tippercentage').value);
    
 
    var result=(amount*perc)/100;
    
  document.getElementById("tipamount").value=result;
  
  var tipperperson =result/person;
   document.getElementById('totalamount').innerHTML=tipperperson;

  }