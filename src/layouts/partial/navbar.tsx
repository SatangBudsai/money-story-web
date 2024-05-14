'use client'

import type { NavbarProps } from '@nextui-org/react'

import React from 'react'
import {
  Navbar as NavbarNextUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button
} from '@nextui-org/react'
import SwitchThemes from '@/components/swicth-themes'
import { Icon } from '@iconify/react/dist/iconify.js'

const menuItems = ['About', 'Blog', 'Customers', 'Pricing', 'Enterprise', 'Changelog', 'Documentation', 'Contact Us']

export default function Navbar(props: NavbarProps) {
  return (
    <NavbarNextUI
      {...props}
      classNames={{
        base: 'py-4 backdrop-filter-none bg-transparent',
        wrapper: 'px-0 w-full justify-center bg-transparent',
        item: 'hidden md:flex'
      }}
      height='3.375rem'>
      <NavbarContent
        className='gap-4 px-2 rounded-full border-small border-default-200/20 bg-background/60 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50'
        justify='center'>
        {/* Toggle */}
        <NavbarMenuToggle className='ml-2 text-default-400 md:hidden' />

        {/* Logo */}
        <NavbarBrand className='w-[80vw] md:w-auto md:max-w-fit'>
          <div className='rounded-full'>
            <Icon icon='solar:round-graph-bold' className='text-4xl text-primary' />
          </div>
          <span className='ml-2 font-medium md:hidden'>MoneyStory</span>
        </NavbarBrand>

        {/* Items */}
        <NavbarItem className='hidden md:flex'>
          <Link className='text-default-500' href='#'>
            หน้าหลัก
          </Link>
        </NavbarItem>
        <NavbarItem className='hidden md:flex'>
          <Link color='primary' href='#'>
            พอร์ตของฉัน
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-default-500' href='#'>
            กราฟวิเคราะห์ผล
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-default-500' href='#'>
            อันดับสินทรัพย์
          </Link>
        </NavbarItem>
        <NavbarItem>
          <SwitchThemes />
        </NavbarItem>
        <NavbarItem className='-ml-3'>
          <Button radius='full' variant='flat'>
            เข้าสู่ระบบ
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Menu */}
      <NavbarMenu
        className='top-[calc(var(--navbar-height)/2)] mx-auto mt-16 max-h-[40vh] max-w-[80vw] rounded-large border-small border-default-200/20 bg-background/60 py-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50'
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: 'easeInOut',
            duration: 0.2
          }
        }}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className='w-full text-default-500' href='#' size='md'>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarNextUI>
  )
}
