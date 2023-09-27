import React, { useState } from "react";

export default function useVisaulMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
   if(replace) {
    setHistory(prevMode => [...prevMode.splice(0, 1, newMode)])
   }
    setHistory(prevMode =>  [...prevMode, newMode])
  };

  const back = () => {
    setHistory(prev =>  [...prev.slice(0, history.length-1)])
  };

  return { mode: history[history.length - 1], transition, back };
}