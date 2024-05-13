"use client"

import {
  Card,
  List,
  Typography,
  Chip,
  Button,
  Avatar,
} from "@material-tailwind/react"

import { useState } from "react"
import Link from "next/link"

function SideBar() {
  const Links = [
    {
      title: "Overview",
      href: "/components/overview",
    },
    {
      title: "Sales",
      href: "/components/sales",
    },
    {
      title: "Products",
      href: "/components/product",
    },
    {
      title: "Trafic",
      href: "/components/trafic",
    },
  ]

  const [show, setShow] = useState(false)

  return (
    <nav className='w-[20rem]  overflow-hidden text-white  h-[100dvh] relative hidden lg:block bg-[#131925]'>
      <div className='fixed top-0 left-0   h-full  overflow-hidden py-12 px-16'>
        <h1 className='text-xl text-[#E4E8EE]'>Dashboard UI</h1>

        <div className='mt-20'>
          <p className='font-medium mb-4 uppercase text-[#E4E8EE]'>Menu</p>
        </div>

        <Card className='bg-transparent w-[10rem] border-none flex items-center flex-col '>
          <Card.Header
            className='cursor-pointer'
            onClick={() => setShow(!show)}
          >
            Dashboard
          </Card.Header>
          {show && (
            <Card.Body>
              <List>
                {Links.map(({ title, href }) => (
                  <List.Item
                    key={title}
                    className='list-disc hover:bg-white hover:cursor-pointer w-fit'
                  >
                    <Link href={href}>{title}</Link>
                  </List.Item>
                ))}
              </List>
            </Card.Body>
          )}
        </Card>
        <div className='flex items-center gap-4 absolute bottom-4 left-0 w-full    px-12'>
          <Avatar src='https://dub.sh/TdSBP0D' alt='avatar' />
          <div>
            <Typography>Ansar Sadat</Typography>
            <Typography type='small' className='text-foreground'>
              Web Developer
            </Typography>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SideBar
