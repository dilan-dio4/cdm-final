import React, { useContext } from 'react'
import { Text } from '@smooth-ui/core-sc'
import { AppContext } from '../App'

export default function CTAText()
{

    const { darkModeChecked } = useContext(AppContext)

    return (
        <Text variant="display-3" style={{ padding: '100px 0 8vh 0', color: darkModeChecked ? "white" : "black" }} >Play Below!</Text>
    )
}