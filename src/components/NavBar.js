import React, { useState } from 'react'
import { Text, Switch } from '@smooth-ui/core-sc'


export default function NavBar()
{
    const [ darkModeChecked, setDarkModeChecked ] = useState(false)

    return (
        <div className="NavBar-root">
            <div className="NavBar-elements-container">
                <Text variant="h2">Connect 4 Game</Text>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Text variant="h5" style={{ paddingRight: 20, paddingTop: 4 }}>Dark Mode</Text>
                    <Switch checked={darkModeChecked} onChange={ () => setDarkModeChecked(!darkModeChecked) } />
                </div>
            </div>
        </div>
    )
}