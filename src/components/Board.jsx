import {useState} from 'react'
import Square from './Square'
export default function Board() {

    const [square, setSquere] = useState(Array(9).fill(null)); 
    const [isNext, setNext] = useState(true);

    function handelClick(index){

        if(square[index] ) return;
        const nextSqures = square.slice();
        
        if(isNext){
            nextSqures[index] = "X";
        }else{
            nextSqures[index] = "Y";
        }
        setSquere(nextSqures);
        setNext(!isNext);
    }
 
  return (
    <>
        <div className='flex'>
            <Square value={square[0]} onSquareClicked={()=>handelClick(0)}/>
            <Square value={square[1]} onSquareClicked={()=>handelClick(1)}/>
            <Square value={square[2]} onSquareClicked={()=>handelClick(2)}/>
        </div>
        <div className='flex'>
            <Square value={square[3]} onSquareClicked={()=>handelClick(3)}/>
            <Square value={square[4]} onSquareClicked={()=>handelClick(4)}/>
            <Square value={square[5]} onSquareClicked={()=>handelClick(5)}/>
        </div>
        <div className='flex'>
            <Square value={square[6]} onSquareClicked={()=>handelClick(6)}/>
            <Square value={square[7]} onSquareClicked={()=>handelClick(7)}/>
            <Square value={square[8]} onSquareClicked={()=>handelClick(8)}/>
        </div>

        //fasdfasdfasdfadf

    </>
    )
  
}
