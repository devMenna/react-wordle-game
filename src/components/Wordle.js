import React from "react";
import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

const Wordle = ({solution}) => {
    const { currentGuess , handleKeyup , guesses , isCorrect ,usedKeys, turn } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup' , handleKeyup) 

        if(isCorrect){
            console.log('congrats, you won!')
            window.removeEventListener('keyup' , handleKeyup)
        }

        if(turn > 5){
            console.log('unlucky, you lose!')
            window.removeEventListener('keyup' , handleKeyup)
        }

        return () => window.removeEventListener('keyup' , handleKeyup)
    } , [handleKeyup , isCorrect])



    return ( 
        <div>
            <div>solution - { solution }</div>
            <div>current guess - { currentGuess }</div>
            <Grid currentGuess={ currentGuess } guesses={ guesses } turn={ turn } />
            <Keypad usedKeys={usedKeys} />
        </div>
     );
}
 
export default Wordle;