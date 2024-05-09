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
  const loaderGlobal = useLoaderGlobal()

  const { theme, setTheme } = useTheme()
  const [date, setDate] = useState<Date | undefined>()
  const [arrDate, setArrDate] = useState<Date[] | undefined>()
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>()

  const getApi = async () => {
    loaderGlobal.start()
    await apiBase.get({ urlBase: 'https://randomuser.me', url: '/api' })
    loaderGlobal.stop()
  }

  return <Fragment></Fragment>
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
