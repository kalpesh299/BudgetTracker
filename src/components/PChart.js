import React, { useState } from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export const PChart = ({monthlypayment,intvalue,principle}) => {

  const data = {
    labels: ['Principle', 'Intrest Value'],
    datasets: [
      {
        label: 'Ratio of principle and Intrest',
        data: [principle,intvalue],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='border-2  border-black w-2/4 p-52 '>
      <h1 className='text-center font-bold text-2xl'>Monthly Payment ₹ : {monthlypayment}</h1>
      <Pie className='' data={data} />;
    </div>
  )
}
