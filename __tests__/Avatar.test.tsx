import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Avatar, AvatarStyle } from '../src/index'

describe('Avatar', () => {
  it('renders an SVG element', () => {
    const { container } = render(<Avatar avatarStyle={AvatarStyle.Circle} />)
    const svg = container.querySelector('svg')
    expect(svg).not.toBeNull()
  })

  it('renders with Transparent style', () => {
    const { container } = render(
      <Avatar avatarStyle={AvatarStyle.Transparent} />
    )
    const svg = container.querySelector('svg')
    expect(svg).not.toBeNull()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Avatar avatarStyle={AvatarStyle.Circle} className='my-avatar' />
    )
    const svg = container.querySelector('svg')
    expect(svg?.getAttribute('class')).toBe('my-avatar')
  })

  it('applies custom inline style', () => {
    const { container } = render(
      <Avatar avatarStyle={AvatarStyle.Circle} style={{ width: 100 }} />
    )
    const svg = container.querySelector('svg')
    expect(svg?.getAttribute('style')).toContain('width')
  })

  it('has correct viewBox', () => {
    const { container } = render(<Avatar avatarStyle={AvatarStyle.Circle} />)
    const svg = container.querySelector('svg')
    expect(svg?.getAttribute('viewBox')).toBe('0 0 264 280')
  })
})
