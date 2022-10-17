/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useMemo, useState } from "react";

export const ExampleUM = () => {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    const location = useMemo(() => {
        return {
            country: isKorea ? "한국" : "외국",
        };
    }, [isKorea]);

    useEffect(() => {
        console.log("useEffect 호출!");
    }, [location]);

    return (
        <div>
            <h2>하루에 몇끼??</h2>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <hr />
            <h2>어느 나라 고고??</h2>
            <p>나라 : {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기 탑승~</button>
        </div>
    );
};

// export default exampleUM;
