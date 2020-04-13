import React, { useContext } from 'react'
import { Text, Switch } from '@smooth-ui/core-sc'
import { AppContext } from '../App'

export default function NavBar()
{

    const { darkModeChecked, setDarkModeChecked } = useContext(AppContext)

    return (
        <div className={darkModeChecked ? 'NavBar-root-dark' : 'NavBar-root-light'}>
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