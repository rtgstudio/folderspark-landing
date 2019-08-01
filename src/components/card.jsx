// Cards

import React from 'react'

const Card = ({imgsrc, title, text, link}) => 
    <div class="card z-depth-4">
        <div class="card-image">
            <img src={ imgsrc } alt="cardimg" />
            <span class="card-title black-text"><strong>{ title }</strong></span>
        </div>
        <div class="card-content">
            <p>{ text }</p>
        </div>
        <div class="card-action">
            <a href={ link }>This is a link</a>
        </div>
    </div>

export default Card