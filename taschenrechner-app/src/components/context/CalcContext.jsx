import {createContext, useState} from 'react'

const CalcContext = createContext();

export const CalcProvider = ({children}) => {
    const [acText, setAcText] = useState(0);
    const [prevText, setPrevText] = useState();
    const [operator, setOperator] = useState();
    const [isOperating, setIsOperating] = useState(false);
    const [solution, setSolution] = useState(false);

    const clearAll = () => {
        setAcText(0);
        setPrevText();
        setIsOperating(false);
        setOperator();
        setSolution(false);
    }

    const clear = () => {
        setAcText(0);
    }

    const numFunc = (number) => {
        if(solution && !isOperating) {
            clearAll();
        }

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
    
    const opFunc = (new_operator) => {
        if(new_operator === 'X') new_operator = 'x';
        if(!isOperating) {
            switch(new_operator) {
                case '+':
                    setOperator('+');
                    setIsOperating(true);
                    setPrevText(acText);
                    clear();
                    break;
                case '-':
                    setOperator('-');
                    setIsOperating(true);
                    setPrevText(acText);
                    clear();
                    break;
                case '/':
                    setOperator('/');
                    setIsOperating(true);
                    setPrevText(acText);
                    clear();
                    break;
                case 'x':
                    setOperator('x');
                    setIsOperating(true);
                    setPrevText(acText);
                    clear();
                    break;            
                default: return;
            }
        } else if(isOperating && acText === 0 && new_operator !== operator) {
            switch(new_operator) {
                case '+':
                    setOperator('+');
                    break;
                case '-':
                    setOperator('-');
                    break;
                case '/':
                    setOperator('/');
                    break;
                case 'x':
                    setOperator('x');
                    break;            
                default: return;
            }
        } else if(isOperating && acText !== 0) {
            setOperator(new_operator);
            setIsOperating(true);
            setPrevText(equals());
            clear();
        }
    }

    const equals = () => { 
        switch(operator) {
            case '+':
                return(parseInt(prevText, 10) + parseInt(acText, 10));
            case '-':
                return(parseInt(prevText, 10) - parseInt(acText, 10));
            case '/':
                return(parseInt(prevText, 10) / parseInt(acText, 10));
            case 'x':
                return(parseInt(prevText, 10) * parseInt(acText, 10));            
            default: return;
        }
        
    }

    const displaySolution = (() => {
      setSolution(true);  
      clearAll();
      setAcText(equals());
      setIsOperating(false);
    })


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
                displaySolution,
            }}
        >
            {children}
        </CalcContext.Provider>    
    );
};

export default CalcContext