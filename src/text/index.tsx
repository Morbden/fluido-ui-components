import React from 'react'
import { Flui } from '@fluido/ui'
import { TextProps_, Text_ } from './styled'

export interface TextProps extends TextProps_ {}

export const Text = Flui<'p', TextProps>(({ children, as, ...props }, ref) => {
  return (
    <Text_ as={as || 'p'} ref={ref} {...props}>
      {children}
    </Text_>
  )
})
