import React from 'react'
import { Text } from '@smooth-ui/core-sc'
import {
    useMenuState,
    Menu,
    MenuItem,
    MenuDisclosure,
    MenuSeparator,
} from '@smooth-ui/core-sc'


export default function NavBar()
{
  const menu = useMenuState()

    return (
        <div className="NavBar-root">
            <div className="NavBar-elements-container">
                <Text variant="h2">Dilan and Matt's Connect 4</Text>
                <>
                    <MenuDisclosure {...menu}>Preferences</MenuDisclosure>
                    <Menu {...menu} aria-label="Preferences">
                        <MenuItem {...menu}>Settings</MenuItem>
                        <MenuItem {...menu} disabled>Extensions</MenuItem>
                        <MenuSeparator {...menu} />
                        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
                    </Menu>
                </>
            </div>
        </div>
    )
}