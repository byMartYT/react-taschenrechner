import {createContext, useState} from 'react'

const CalcContext = createContext();

export const CalcProvider = ({children}) => {
    const [acText, setAcText] = useState(0);
    const [prevText, setPrevText] = useState();
    const [operator, setOperator] = useState();
    const [isOperating, setIsOperating] = useState(false);

    const clearAll = () => {
        setAcText(0);
        setPrevText();
        setIsOperating(false);
        setOperator();
    }

    const clear = () => {
        setAcText(0);
    }

    const numFunc = (number) => {
        if(acText === 0) {
            setAcText(number);
        } else if(acText !== 0) {
            setAcText(acText.toString() + number);
        }
    }

    const back = () => {
        setAcText(Math.floor(acText / 10));
    }

    const dot = () => {
        let acTextString = acText.toString();
        for(let char of acTextString) {
            if(char === '.') {
                return;
            }
        }
        setAcText(acText.toString() + '.');
    }
    
    const opFunc = (operator) => {
        console.log("operator")
        if(!isOperating) {
            console.log("is not operating")
            console.log(operator)
            
            switch(operator) {
                case '+':
                    console.log("+")
                    setOperator('+');
                    setIsOperating(true);
                    setPrevText(acText);
                    break;
                case '-':
                    break;
                case '/':
                    break;
                case 'X':
                    break;            
                default: return;
            }
        }
    }

    return (
        <CalcContext.Provider 
            value={{
                operator,
                acText,
                prevText,
                clearAll,
                clear,
                numFunc,
                back,
                dot,
                opFunc,
            }}
        >
            {children}
        </CalcContext.Provider>    
    );
};

export default CalcContext