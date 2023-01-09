import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@math-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, at nisi aspernatur dolor repudiandae nihil? Facilis magni nemo dignissimos earum, reprehenderit commodi qui possimus natus sunt laudantium laboriosam enim maiores!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
