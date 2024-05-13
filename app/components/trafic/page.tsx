"use client"

import Chart from "react-apexcharts"
import type { ApexOptions } from "apexcharts"
import { Card } from "@material-tailwind/react"

const chartConfig = {
  type: "pie",
  height: 340,
  width: 300,
  series: [20, 10, 10, 10, 10, 40],
  options: {
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    labels: [
      "United state",
      "Romania",
      "Germany",
      "India",
      "United Kingdom",
      "Other",
    ],
    colors: ["#3D84F6", "#805BEF", "#DC53B8", "#E34E4E", "#EDD039", "#131925"],
  } as ApexOptions,
} as ApexChart

function Page() {
  return (
    <section className='py-12 px-4 md:px-8 w-fit'>
      <Card className='py-4 px-2 md:px-6'>
        <Card.Header className='font-medium mb-2 text-lg text-center md:text-left'>
          Trafic by country
        </Card.Header>
        <Card.Body className='bg-white flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12'>
          <Chart {...chartConfig} />
          <ul className='flex flex-col gap-1  w-[15rem]'>
            <li className='flex items-center gap-4 justify-between text-slate-400 uppercase text-sm font-medium mb-4'>
              <span>Customer</span>
              <span>User</span>
            </li>

            {/* 1 */}

            <li className='flex items-center justify-between border-t border-slate-200 py-2.5 '>
              <div className='flex items-center gap-4'>
                <div className='w-4 h-4 rounded-full bg-[#3D84F6]'></div>
                <p>United state</p>
              </div>
              <span>6,121</span>
            </li>
            {/* 2 */}
            <li className='flex items-center justify-between border-t border-slate-200 py-2.5 '>
              <div className='flex items-center gap-4'>
                <div className='w-4 h-4 rounded-full bg-[#805BEF]'></div>
                <p>Romania</p>
              </div>
              <span>1,531</span>
            </li>
            {/* 3 */}
            <li className='flex items-center justify-between border-t border-slate-200 py-2.5 '>
              <div className='flex items-center gap-4'>
                <div className='w-4 h-4 rounded-full bg-[#DC53B8]'></div>
                <p>Germany</p>
              </div>
              <span>1,158</span>
            </li>
            {/* 4 */}
            <li className='flex items-center justify-between border-t border-slate-200 py-2.5 '>
              <div className='flex items-center gap-4'>
                <div className='w-4 h-4 rounded-full bg-[#E34E4E]'></div>
                <p>India</p>
              </div>
              <span>985</span>
            </li>
            {/* 5 */}
            <li className='flex items-center justify-between border-t border-slate-200 py-2.5 '>
              <div className='flex items-center gap-4'>
                <div className='w-4 h-4 rounded-full bg-[#EDD039]'></div>
                <p>United Kingdom</p>
              </div>
              <span>543</span>
            </li>
            {/* 6 */}
            <li className='flex items-center justify-between border-t border-slate-200 py-2.5 '>
              <div className='flex items-center gap-4'>
                <div className='w-4 h-4 rounded-full bg-[#131925]'></div>
                <p>Other</p>
              </div>
              <span>12,264</span>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </section>
  )
}

export default Page
