import { useState, useEffect } from 'react';

export default function useHoroscopeFetcher() {
    const  fetchHoroscope = () => {

         fetch("https://poker247tech.ru/get_horoscope/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "sign": "aries",
                "language": "original",
                "period": "today"
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log("hello", data);
            })
            .catch(error => {
                console.error('Ошибка получения данных:', error);
            });

    };
    fetchHoroscope();

    // let supportPredict = "In the morning you will be especially good at establishing useful connections and finding common ground with various people..."; // shortened for brevity

    // return JSON.stringify(result ? result : supportPredict, null, 2);
}
