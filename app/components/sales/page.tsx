"use client"

import { SubmitDocument } from "iconoir-react"

function page() {
  return (
    <section className='py-12 px-8 bg-slate-100 w-full h-[100dvh]'>
      <div className='border bg-white py-12 px-6 w-fit rounded-lg'>
        <h2 className='font-medium text-lg '>Recent Sales</h2>

        <div className='flex items-start gap-12 mt-6 text-sm'>
          {/* 1 */}
          <div className='flex flex-col gap-4 '>
            <h4 className='text-slate-400 text-xs uppercase font-medium  py-2.5'>
              Data Sold
            </h4>

            <span className='py-2.5'>Aug 7</span>
            <span className='py-2.5'>Aug 7</span>
            <span className='py-2.5'>Aug 6</span>
            <span className='py-2.5'>Aug 5</span>
            <span className='py-2.5'>Aug 5</span>
            <span className='py-2.5'>Aug 3</span>
          </div>
          {/* 2*/}
          <div className='flex flex-col gap-4'>
            <h4 className='text-slate-400 text-xs uppercase font-medium  py-2.5'>
              Product
            </h4>

            <p className='py-2.5 flex items-center gap-2'>
              <SubmitDocument />
              <span>CSS ninja Ebook</span>
            </p>
            <p className='py-2.5 flex items-center gap-2'>
              <SubmitDocument />
              <span>Video Js Course</span>
            </p>
            <p className='py-2.5 flex items-center gap-2'>
              <SubmitDocument />
              <span>CSS Ninja Ebook</span>
            </p>
            <p className='py-2.5 flex items-center gap-2'>
              <SubmitDocument />
              <span>Video JS Course</span>
            </p>
            <p className='py-2.5 flex items-center gap-2'>
              <SubmitDocument />
              <span>CSS Ninja Ebook</span>
            </p>
            <p className='py-2.5 flex items-center gap-2'>
              <SubmitDocument />
              <span>Video JS Course</span>
            </p>
          </div>
          {/* 3 */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-slate-400 text-xs uppercase font-medium  py-2.5'>
              Custommer
            </h4>

            <span className='py-2.5'>David Kelly</span>
            <span className='py-2.5'>Jessica Harper</span>
            <span className='py-2.5'>Vlad Cristea</span>
            <span className='py-2.5'>Jhon Wesley</span>
            <span className='py-2.5'>Patrick lee</span>
            <span className='py-2.5'>Ashly Amber</span>
          </div>
          {/* 4 */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-slate-400 text-xs uppercase font-medium  py-2.5'>
              Price
            </h4>

            <span className='py-2.5'>$16</span>
            <span className='py-2.5'>$32</span>
            <span className='py-2.5'>$16</span>
            <span className='py-2.5'>$32</span>
            <span className='py-2.5'>$16</span>
            <span className='py-2.5'>$16</span>
          </div>
          {/* 5 */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-slate-400 text-xs uppercase font-medium  py-2.5'>
              Earning
            </h4>

            <span className='py-2.5'>11,2</span>
            <span className='py-2.5'>22,4</span>
            <span className='py-2.5'>11,2</span>
            <span className='py-2.5'>22,4</span>
            <span className='py-2.5'>11,2</span>
            <span className='py-2.5'>11,2</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
