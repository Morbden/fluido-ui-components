import { styled } from '@fluido/ui'
import { Box, BoxProps } from '@fluido/ui-containers'

export interface BottomNavProps_ extends BoxProps {
  bgColor?: string
}

export const BottomNav_ = styled(Box)<BottomNavProps_>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
