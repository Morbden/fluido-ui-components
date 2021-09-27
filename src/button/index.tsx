import React from 'react'
import { Flui } from '@fluido/ui'
import { Button_ } from './styled'

interface Props {}

export const Button = Flui<'div', Props>(({ children, ...props }, ref) => {
  return (
    <Button_ ref={ref} {...props}>
      {children}
    </Button_>
  )
})
