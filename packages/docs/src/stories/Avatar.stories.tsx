import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@igor-cotrim-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/igor-cotrim.png',
    alt: 'Igor Cotrim',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
