import React from 'react'
import { Flui } from '@fluido/ui'
import { Stack } from '@fluido/ui-containers'
import { BottomNavLink } from './bottom-nav-link'
import { BottomNavLinks } from './bottom-nav-links'

interface Props {}

export const BottomNav = Flui<'div', Props>(({ children, ...props }, ref) => {
  return (
    <Stack gap={0} p={8} bgColor='gray' as='nav' ref={ref} {...props}>
      <BottomNavLinks>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <BottomNavLink icon={i + 1} key={i}>
              Link {i + 1}
            </BottomNavLink>
          ))}
      </BottomNavLinks>
    </Stack>
  )
})
