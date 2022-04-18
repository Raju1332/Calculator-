let button=document.querySelectorAll(".btn");
Array.from(button).map(x=>{
    x.addEventListener("click",(event)=>{
        let btnVal=event.target.value;
        let displayVal=document.querySelector("#display").value;

        if(btnVal=="DEL"){
            document.querySelector("#display").value=displayVal.slice(0,displayVal.length-1);
        }
        else if(btnVal=="AC"){ 
            document.querySelector("#display").value="";
        }
        else if(btnVal=="X"){
            btnVal="*";
            document.querySelector("#display").value=displayVal+btnVal;
        }
        else if(btnVal=="="){
            document.querySelector("#display").value=eval(displayVal);

        }
        else{
            document.querySelector("#display").value=displayVal+btnVal;
        }

    })



})