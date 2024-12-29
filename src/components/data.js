import {useEffect, useState} from 'react';



export default function DataComponent () {


        const [data, setData] = useState([]);




        useEffect(() => {
                fetch('/api/data')
                .then(response => response.json())
                .then(data => {setData(data)})
                .catch(error => console.error('Error fetching data:', error));
        }, []);


        console.log("🔴",data);








        return (<div>
                <h1>Data</h1>
                        { data.map((item, index) => (
                                <div key={index}>
                                        <h3>{item.title}</h3>
                                </div>
                        ))}
                </div>
        );
};
