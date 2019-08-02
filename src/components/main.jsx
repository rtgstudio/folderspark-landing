import React from 'react'
import Slider from './slider'
import CardContainer from './cardContainer'

const Main = () => {
    return (
        <>
            <Slider />
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 l6">
                        <div className="fadeInLeft" style={{ marginLeft: 250 }}>
                            <img src="https://rtgstudios.in/folderspark/folder.png" alt="img" />
                        </div>
                    </div>
                    <div className="col s12 m6 l6">
                        <h3>Folder Spark</h3>
                        <p>R.T.G Folder Spark Provides You With Complete Folder and File Encryption</p>
                        <i class="material-icons">cloud_download</i><br />
                        <button className="btn red waves-effect">DOWNLOAD</button>
                        <button className="btn green waves-effect" style={{ margin: 10 }}>FEEDBACK</button>
                    </div>
                </div> <br /><br /><hr /><br />
                <div className="row">
                    <h2 className="header center"><i className="material-icons" style={{ fontSize: 40, margin: 8 }}>chrome_reader_mode</i>Features</h2><br />
                    <CardContainer />
                </div>
                <div className="row">
                    <h2 className="header center"><i className="material-icons" style={{ fontSize: 40 }}>chevron_left</i>/<i className="material-icons" style={{ fontSize: 40 }}>chevron_right</i>Developer</h2>
                </div>
                <div className="row">
                    <div className="col s12 m4 l4"></div>
                    <div className="col s12 m4 l4">
                        <img src="https://rtgstudios.in/folderspark/pri.jpg" alt="Priyanshu Kumar Developer Folder Shield" />
                    </div>
                    <div className="col s12 m4 l4"></div>
                </div>
                <div className="row">
                    <strong className="center"><p style={{ fontSize: 40 }}>Priyanshu Kumar</p></strong>
                </div>
                <div className="row">
                    <p className="center">"Wanted to Create a software which helps the world and is cost effective"</p>
                </div>
               
            </div>
        </>
    )
}



export default Main