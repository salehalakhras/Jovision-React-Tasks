import {useState, useEffect} from 'react';

const UseCurrentTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() =>{
        var interval = setInterval(() => {
            setTime(new Date())
        },1000);

        return () => clearInterval(interval);
    })

    return time;
}


export default UseCurrentTime;
