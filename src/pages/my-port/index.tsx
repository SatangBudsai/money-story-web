import { Fragment, ReactElement, useState } from 'react'
import { useTheme } from 'next-themes'
import RootLayout from '@/layouts/root-layout'
import MainLayout from '@/layouts/main-layout'
import { DateRange } from 'react-day-picker'
import Alert from '@/components/alert'
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Input } from '@nextui-org/react'
import apiBase from '@/api/base'
import useLoaderGlobal from '@/hooks/useLoaderGlobal'
import DatePicker from '@/components/date-picker'
import DateMultiplePicker from '@/components/date-multiple-picker'
import DateRangePicker from '@/components/date-range-picker'
import Container from '@/components/container'
import { Icon } from '@iconify/react/dist/iconify.js'

type Props = {}

const Home = (props: Props) => {
  return (
    <Fragment>
      <Container className='mt-10'>
        <h1 className='text-5xl font-semibold text-center'>พอร์ตของฉัน</h1>
        <p className='p-1 text-xl text-center'>จัดสรรสัดส่วนการลงทุน</p>
        <div className='flex flex-col gap-3 mt-10'>
          <div className='flex gap-2'>
            <h2 className='text-2xl font-semibold'>รายการพอร์ตทั้งหมด</h2>
            <Chip size='lg' color='primary' variant='flat'>
              1 พอร์ต
            </Chip>
          </div>
          <div className='grid grid-cols-3 gap-5 max-lg:grid-cols-2'>
            <Card className='border-2' shadow='none'>
              <CardHeader className='justify-between'>
                <h2 className='text-xl'>พอร์ตหลัก</h2>
                <Button color='primary'>รายลละเอียด</Button>
              </CardHeader>
              <Divider />
              <CardBody className='flex flex-row flex-wrap gap-2 text-xl'>
                <Chip variant='flat' color='success' startContent={<Icon icon='streamline:dollar-coin-solid' className='text-xl' />}>

                  1,000 USD
                </Chip>
                <Chip variant='flat' color='warning'>
                  10 หุ้น
                </Chip>
              </CardBody>
            </Card>
            <Card className='w-full border-2 border-dashed' shadow='none'>
              <CardBody className='flex items-center justify-center text-'>
                <h2 className='text-xl'>สร้างพอร์ตใหม่</h2>
              </CardBody>
            </Card>
            {/* <Card className='w-full border-2 border-dashed' shadow='none'>
              <CardBody className='flex items-center justify-center'>
              </CardBody>
            </Card> */}
          </div>
        </div>
        {/* <Card className='mt-10'>
          <CardHeader className='justify-between'>
            <h2 className='px-10 py-2 text-xl rounded-2xl bg-primary text-primary-foreground'>พอร์ตทั้งหมด</h2>
            <Chip size='lg' color='primary' variant='flat'>
              จำนวน 1 พอร์ต
            </Chip>
          </CardHeader>
          <CardBody className='grid grid-cols-1 gap-5'>
            <Card className='h-32 border-2' shadow='none'>
              <CardHeader className='justify-star'>
                <h2 className='text-xl font-semibold'>พอร์ตหลัก</h2>
              </CardHeader>
              <Divider />
              <CardBody>
                <div>
                  <p>หุ้นทั้งหมด</p>
                </div>
                <div>
                  <p>เงินทั้งหมด</p>
                </div>
              </CardBody>
            </Card>
          </CardBody>
          <CardFooter>
            <Card className='w-full border-2 border-dashed' shadow='none'>
              <CardBody className='flex items-center justify-center'>
                <h2 className='text-xl'>สร้างพอร์ตใหม่</h2>
              </CardBody>
            </Card>
          </CardFooter>
        </Card> */}
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
