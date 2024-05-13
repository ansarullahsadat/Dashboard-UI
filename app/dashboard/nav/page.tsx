"use client"

import { Search, BellNotification } from "iconoir-react"
import { Input } from "@material-tailwind/react"

function Nav() {
  return (
    <div className='w-full  border-b border-slate-400 p-4'>
      <div className='flex  items-center justify-end gap-4 text-slate-400'>
        <Input className='w-56 ring-0'>
          <Input.Field
            type='search'
            placeholder='Search anything...'
            className='ring-0'
          />
          <Input.Icon placement='end'>
            <Search className='h-full w-full' />
          </Input.Icon>
        </Input>

        <BellNotification className='w-5 h-5' />
      </div>
    </div>
  )
}

export default Nav
