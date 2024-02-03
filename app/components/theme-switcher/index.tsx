'use client'

import { useTheme } from 'next-themes'
import { PropsWithChildren, useEffect, useState } from 'react'
import { Moon, Sun } from '@components/icons'
import socialStyles from '@components/social-links/social-links.module.css'
import Tooltip from '@components/tooltip'

export default function ThemeSwitcher({
  className = '',
  hideTooltip = false,
}: {
  className?: string
  iconSize?: number
  hideTooltip?: boolean
}) {
  const { theme: activeTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const Wrapper = ({ children }: PropsWithChildren) =>
    hideTooltip ? (
      <>{children}</>
    ) : (
      <Tooltip text={activeTheme === 'light' ? 'Dark mode' : 'Light mode'}>
        {children}
      </Tooltip>
    )

  return (
    <Wrapper>
      {mounted && (
          <button
            onClick={() => setTheme(activeTheme === 'light' ? 'dark' : 'light')}
            aria-label="Change the theme"
            className={`${socialStyles.icon} ${className}`}
          >
            {activeTheme === 'light' ? (
              <Moon color={`var(--icon-moon-color)`} />
            ) : (
              <Sun color={`var(--icon-sun-color)`} />
            )}
          </button>
      )}
    </Wrapper>
  )
}