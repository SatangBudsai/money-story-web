'use client'

import React, { Fragment } from 'react'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react'
import { Button, Switch, cn } from '@nextui-org/react'

const SwitchThemes = () => {
  const { setTheme, theme } = useTheme()

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <Fragment>
      <Switch
        isSelected={theme === 'light'}
        size='md'
        color='primary'
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <Icon icon='mingcute:sun-fill' onClick={handleTheme} className={cn(className, 'text-primary-600')} />
          ) : (
            <Icon icon='ph:moon-fill' onClick={handleTheme} className={cn(className, 'text-primary-400')} />
          )
        }
        onClick={handleTheme}
      />
    </Fragment>
  )
}

export default SwitchThemes
