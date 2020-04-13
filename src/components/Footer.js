import React, { useContext } from 'react';
import { Text } from '@smooth-ui/core-sc'
import { AppContext } from '../App'


export default function Footer()
{

    const { darkModeChecked } = useContext(AppContext)

    return (
        <div className={ darkModeChecked ? "footer-root-dark" : "footer-root-light"  }>
            <Text variant="h6" style={{ color: darkModeChecked ? 'white' : "black" }} >{"Composition Digital Media · Spring 2020 · Dilan Ozkaynak & Matt Ludwig"}</Text>
        </div>
    );

}