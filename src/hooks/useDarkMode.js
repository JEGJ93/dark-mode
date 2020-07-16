import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
   const [values, setValues] = useLocalStorage("is Dark mode on", initialValue);
   const body = document.querySelector('body');
    
   

    useEffect(() => {
        return values ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    }, [values])

    return [values, setValues];

};

export default useDarkMode;


