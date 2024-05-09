import { Fragment, ReactElement, useState } from 'react'
import { useTheme } from 'next-themes'
import RootLayout from '@/layouts/root-layout'
import MainLayout from '@/layouts/main-layout'
import { DateRange } from 'react-day-picker'
import Alert from '@/components/alert'
import { Button, Input } from '@nextui-org/react'
import apiBase from '@/api/base'
import useLoaderGlobal from '@/hooks/useLoaderGlobal'
import DatePicker from '@/components/date-picker'
import DateMultiplePicker from '@/components/date-multiple-picker'
import DateRangePicker from '@/components/date-range-picker'
import Container from '@/components/container'

type Props = {}

const Home = (props: Props) => {
  return (
    <Fragment>
      <Container className='mt-10'>
        <h1 className='text-5xl font-semibold text-center'>MoneyStory</h1>
        <p className='text-xl text-center'>จัดสรรสัดส่วนการลงทุน</p>
      </Container>
    </Fragment>
  )
}

Home.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <RootLayout>
        <MainLayout>{page}</MainLayout>
      </RootLayout>
    </Fragment>
  )
}

export default Home
