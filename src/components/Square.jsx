import { useState } from "react";

export default function Square({value, onSquareClicked}) {
    // const [value, setValue] = useState(null);
    // function handelClick(){
    //     setValue("X");   
    // }
  return (
     <>
        <button className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
            onClick={onSquareClicked}
         >{value}</button>
       
     </>
  )
}
