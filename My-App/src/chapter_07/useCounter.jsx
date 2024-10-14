import React, { useState } from "react";

function useCounter(initialValue){
    const[count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0)); //Math.max(결과값, 최저값)

    return [count, increaseCount, decreaseCount];
}

export default useCounter;