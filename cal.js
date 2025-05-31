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
   
     if (e.target.innerHTML == "del") {
  if (string.length > 0) {
    string = string.substring(0, string.length - 1);
    input.value = string;
  }
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
        let currentChar= e.target.innerHTML;
        if(operators.includes(lastChar)&&operators.includes(currentChar))

        {
            string= string.slice(0,-1)+currentChar;
            input.value = string;
            

        }
        
          else if((currentChar==="/"||currentChar=="*")&&string.length===0){
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
