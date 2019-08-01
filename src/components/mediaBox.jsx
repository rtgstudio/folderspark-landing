import React from 'react'

const MediaBox = ({imgSrc1, imgSrc2, imgSrc3, imgSrc4}) =>

    <div className="row">
        <div className="col s12 m3 l3">
            <img className="materialboxed" src={ imgSrc1 } alt="img" style={{ width: '100%' }} />
        </div>
        <div className="col s12 m3 l3">
            <img className="materialboxed" src={ imgSrc2 } alt="img" style={{ width: '100%' }} />
        </div>
        <div className="col s12 m3 l3">
            <img className="materialboxed" src={ imgSrc3 } alt="img" style={{ width: '100%' }} />
        </div>
        <div className="col s12 m3 l3">
            <img className="materialboxed" src={ imgSrc4 } alt="img" style={{ width: '100%' }} />
        </div>
    </div>

export default MediaBox