import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@igor-cotrim-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit necessitatibus earum dolorum, tempore nulla animi in autem corrupti delectus quae hic nemo nihil a laudantium consequatur omnis non, numquam blanditiis.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
