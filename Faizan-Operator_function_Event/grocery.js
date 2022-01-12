function calculate(){
    const grocery=20;
    const Icecram=15;
    const both_item=grocery+Icecram;
    var leftamount=0;
    var ashish_amount=document.getElementById("amount").value;
   if(ashish_amount>=(both_item)){
         leftamount=leftamount+(ashish_amount-(both_item))
        alert("Ashish purchase Grocery as well as Icecream and left amount is="+leftamount);
    }else if(ashish_amount>=grocery){
        leftamount=leftamount+(ashish_amount-grocery);
        alert("Ashish can purchase Grocery only and "+leftamount+" Rs is left");
    }else {
        alert("Ashish does not purchase anything because of the  less amount");
    }
}
