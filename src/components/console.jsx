import React from 'react'
import './console.css'
import Map from './map'
import Data from './data'

function Console() {
    return (
        <div class="item-2-grid-container">
            <div class="grid-item-2"><Map/></div>
            <div class="grid-item-2"><Data/></div>
            <div class="grid-item-2">Column 3</div>
        </div>
    )
}

export default Console
