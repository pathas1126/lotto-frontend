/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {useState, useEffect} from "react";
const timer = css`
    display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
`;

const dateParser = (originDate) => {
    const date = new Date(originDate).toLocaleString();
    return date;
}

const Timer = () => {
    const [now, setNow] = useState(dateParser(Date.now()))
    useEffect(()=>{
        const timer = setInterval(()=> setNow(dateParser(Date.now()))
        , 1000);

        return ()=> clearTimeout(timer);
    },[])

    return <div css={timer}><span>{now}</span></div>;
};

export default Timer;
