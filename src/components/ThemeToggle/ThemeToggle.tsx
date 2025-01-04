import type { FC } from 'react'
import { Tooltip, UnstyledButton, useMantineColorScheme } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import classes from './ThemeToggle.module.css'

const ThemeToggle: FC = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  return (
    <Tooltip label={`Switch theme to ${colorScheme === 'dark' ? 'Light' : 'Dark'}`} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton className={classes.button} onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}>
        {colorScheme === 'dark' ? <IconMoon /> : <IconSun />}
      </UnstyledButton>
    </Tooltip>
  )
}

export default ThemeToggle
