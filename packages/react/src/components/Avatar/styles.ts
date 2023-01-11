import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  height: '$12',
  width: '$12',
  overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.Image, {
  height: '100%',
  width: '100%',
  objectFit: 'cover',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    height: '$6',
    width: '$6',
  },
})
