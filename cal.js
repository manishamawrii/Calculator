let input = document.getElementById("in");
console.log(input)
let buttons = document.querySelectorAll("button")
console.log(buttons)


let arraList = Array.from(buttons)
console.log(arraList);
let string = "";

arraList.forEach((but)=>{
 but.addEventListener("click" ,(e)=>
 {
   
     if(e.target.innerHTML=="del"){
        console.log(string.length)
        // console.log(typeof(btn))
        console.log(typeof(e.target.innerHTML))
        string = string.substring(0,string.length-1);
        console.log(string.length)
        input.value= string;
    }
    
    else if(e.target.innerHTML=="ac"){
        
        string="";
        input.value= string
    }
 
    else if(e.target.innerHTML=="="){
        
        string=eval(string).toString();
        input.value= string
    }
    else{
        //  console.log(string.slice(-1))
        // let firstChar = string.slice(0,1);
        console.log(string)
        let lastChar = string.slice(-1);
        console.log("last char" +lastChar)
        let operators = ["+" , "-" ,"/" , "*" ]
        let operatorss = [ "/" , "*" ]
        if(operators.includes(lastChar)&&operators.includes(e.target.innerHTML))
        {
            input.value = "error";
            

        }
        
          else if(operatorss.includes(e.target.innerHTML)&&input.value.length===0){
            input.value="error"
          }
      
        
    else{
    string+= e.target.innerHTML;
    // console.log(string)
    input.value = string;
    }
}
 }
)


}
)