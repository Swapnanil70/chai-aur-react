import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    // get the current date in yyyy-mm-dd format
    const date = new Date().toISOString().slice(0, 10);
    console.log("date : ", date)
    console.log("url : ", `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`)
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency]);
    console.log("data : ", data)

    return data
}

export default useCurrencyInfo;