import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@math-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'h1 Heading',
    as: 'h1',
  },
}
