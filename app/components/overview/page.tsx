"use client"

import React from "react"

import Chart from "react-apexcharts"
import { SelectFace3d } from "iconoir-react"
import type { ApexOptions } from "apexcharts"
import { Card, Typography } from "@material-tailwind/react"

const chartConfig = {
  type: "line",
  height: 280,
  series: [
    {
      name: "Sales",
      data: [0, 100, 300, 400, 500, 600, 700],
    },
  ],
  options: {
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
    colors: ["#4C8EF2"],
    stroke: {
      curve: "smooth",
      lineCap: "round",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#4B5563",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#4B5563",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#E5E7EB",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  } as ApexOptions,
} as ApexChart

const page = () => {
  return (
    <section className='py-12 px-8'>
      <div className='flex flex-col md:flex-row gap-12 items-center justify-between'>
        <h1 className='text-slate-500'>
          <span className='font-bold text-black'>Hey Adam!</span> It’s great to
          see you again.
        </h1>

        <input
          type='date'
          className='border py-1 px-4 w-56 text-sm font-medium rounded-md text-slate-400'
        />
      </div>

      <div className='flex items-center flex-wrap justify-center md:justify-start gap-4 mt-12'>
        <div className='rounded-lg bg-[#B8EDC8]/50 py-6 px-4 w-[16rem]'>
          <h2 className='text-sm font-medium'>Total Earnings</h2>
          <p className='flex items-center justify-between mt-8'>
            <span className='font-bold text-lg'>$245.59</span>
            <span className='text-[#42925B]'>+53%</span>
          </p>
        </div>
        {/* 2 */}
        <div className='rounded-lg bg-[#BBDCFC]/50 py-6 px-4 w-[16rem]'>
          <h2 className='text-sm font-medium'>Total Revenue</h2>
          <p className='flex items-center justify-between mt-8'>
            <span className='font-bold text-lg'>$603</span>
            <span className='text-[#42925B]'>34%</span>
          </p>
        </div>
        {/* 3 */}
        <div className='rounded-lg bg-[#F4DCB4]/50 py-6 px-4 w-[16rem]'>
          <h2 className='text-sm font-medium'>Product Sold</h2>
          <p className='flex items-center justify-between mt-8'>
            <span className='font-bold text-lg'>$35</span>
            <span className='text-[#42925B]'>+40%</span>
          </p>
        </div>
      </div>
      {/* chart */}
      <div className='mt-12 '>
        <Card>
          <Card.Body>
            <Chart {...chartConfig} />
          </Card.Body>
        </Card>
      </div>
    </section>
  )
}

export default page
