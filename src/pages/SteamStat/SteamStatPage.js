import React from 'react'
import { useSelector } from 'react-redux'

export default function SteamStatPage() {

    const {Component} = useSelector(state => state.StatReducer);

    return (
        <div>
            {/* <Component/> */}
            {Component}
        </div>
    )
}
