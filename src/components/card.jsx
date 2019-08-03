<<<<<<< HEAD
// Cards

import React from 'react'

const Card = ({imgsrc, title, link, text}) => 
    <div class="card z-depth-4">
        <div class="card-image">
            <img src={ imgsrc } alt="cardimg" />
        </div>
        <div class="card-content">
            <h6 className= "black-text"><strong>{ title }</strong></h6>
            <p>{ text }</p>
        </div>
        <div class="card-action">
            <a href={ link }>This is a link</a>
        </div>
    </div>

=======
// Cards

import React from 'react'

const Card = ({imgsrc, title, link, text}) => 
    <div class="card z-depth-4">
        <div class="card-image">
            <img src={ imgsrc } alt="cardimg" />
        </div>
        <div class="card-content">
            <h6 className= "black-text"><strong>{ title }</strong></h6>
            <p>{ text }</p>
        </div>
        <div class="card-action">
            <a href={ link }>This is a link</a>
        </div>
    </div>

>>>>>>> 251b314c3133973a6c481a318a25bfc8cd9d5cc1
export default Card