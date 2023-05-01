import React from "react"
import Button from "./Button";
import Data from "./Data";

export default function App() {
    
    const [display,setDisplay] = React.useState([]);
    const [result,setResult] = React.useState();
    const values=[];
    const symbol = [];
    const operands = ["/","*","+"];


    const button_arr = Data.map(item => <Button value={item.value} func={changeDisplay} classN={item.classN} />)
   function changeDisplay(event){
    
        const id = event.target.id;
        if(id==="Ac"){setDisplay([]);setResult(0)}
        else if(id==="C"){setDisplay(prevItem => prevItem.slice(0,prevItem.length-1));}
        else if(id==="="){calculation();}
        else{setDisplay(prevItem => [...prevItem,event.target.id]);}
        
}

    function calculation()
    {
        let val="";
        for(let i=0;i<display.length;i++)
        {
            
            if(isNaN(display[i]))
            {
                console.log("val  "+  val);
                if(display[i]!=="."){values.push(parseFloat(val));
               display[i] ==="-" ? val="-" : val="";
               if(display[i]==="-")symbol.push("+");
               else {symbol.push(display[i]);}}
               else{
                    val+=".";
               }
               

            }
            else
            {
                val+=[display[i]];
            }
        
        }
        values.push(parseFloat(val));

        for(let i=0;i<operands.length;i++)
    {
        let curr_operand = operands[i];
        let pointer=0;
        while(pointer<symbol.length)
        {
            if(symbol[pointer]===curr_operand)
            {
                let val;
                switch(symbol[pointer])
                {
                    case "/":val = values[pointer]/values[pointer+1];
                    break;
                    case "*":val = values[pointer]*values[pointer+1];
                    break;
                    case "+":  val = values[pointer]+values[pointer+1];
                    break;
                    default:;
                }

                values.splice(pointer,2,val);symbol.splice(pointer,1)
                
            }
            else
            pointer++;
        }

    }

    setResult(values);
    }
    
    return (
            <div className="calculator">
            <div className="display">
               {display}
               <h2>= {result}</h2>
            </div>
            
            <div className="main_func">
                <div className="functionality">
            {button_arr}
            </div>
            </div>
            
            </div>
    )

}
