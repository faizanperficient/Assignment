function calculate(){
    const Grocery=20;
    const Icecram=15;
    var leftamount=0;
    cost=document.getElementById("amount").value;
    if(cost>=(Grocery+Icecram)){
         leftamount=leftamount+(cost-(Grocery+Icecram))
        alert("Ashish purchase Grocery as well as Icecream and left amount is="+leftamount);
    }else if(cost<(Grocery+Icecram) && cost>=Grocery){
        leftamount=leftamount+(cost-Grocery);
        alert("Ashish purchase only Grocery because only "+leftamount+" Rs is left");
    }else if(cost<=(Grocery+Icecram) && cost>=Icecram){
        // var leftamount=0;
        // leftamount=leftamount+(cost-Icecram);
        alert("Ashish can purchase icecream but grocery is necessary your amount is "+cost+"");
      }else if(cost<=(Grocery+Icecram) && cost<=Grocery && cost<=Icecram ){
        alert("Ashish does not purchase anything  because less amount");
    }
    
}