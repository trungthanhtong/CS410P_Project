import React from 'react'
import { useSelector } from 'react-redux'

export default function SteamStatPage() {

    // Get the component from Redux Store
    const {Component} = useSelector(state => state.StatReducer);

    return (
        <div>
            {Component}
        </div>
    )
}
