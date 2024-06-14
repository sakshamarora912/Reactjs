import React from 'react';
import {Line} from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,  LineElement,PointElement,Title,Tooltip,Legend} from "chart.js"
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);

const Chart =({arr = [],currency,days})=>{
    const prices = [];
    const date=[];

    for (let i = 0; i < arr.length; i++) {
        if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
        else date.push(new Date(arr[i][0]).toLocaleDateString());
        prices.push(arr[i][1]);
      }
    
    console.log(date);

<<<<<<< HEAD
=======
    const data={};
>>>>>>> da0d305d9099cf0fe5009c3c7683bf25fa46f048
    return (
        <Line 
            options={{Responsive:true}}
            data={{
                labels:date,
                datasets:[{
                    label:`price  in ${currency}`,
                    data:prices,borderColor:"rgb(255,99,132)",
                    backgroundColor:"rbg(255,99,132,0.5)",
                }]
            }}
        />
    );
}

export default Chart;
