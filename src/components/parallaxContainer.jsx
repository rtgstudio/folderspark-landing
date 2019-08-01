import React from 'react'
import CardContainer from './cardContainer'
import MediaBox from './mediaBox'


const ParallaxContainer = () =>
    <>
        <div className="parallax-container">
            <div className="parallax"><img src="https://materializecss.com/images/sample-1.jpg" alt="firstimg" style={styles.imgStyle} /></div>
        </div>
        <div className="section white">
            <div className="row container">
                <div className="row">
                    <div className="col s12 m4 l4">
                        <h2 className="grey-text text-lighten-1" style={{marginTop: 150}}>About Us</h2>
                       
                    </div>
                    <br/>
                    <div className="col s12 m8 l8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br /><br/>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
                        ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </p>
                    </div>
                </div>

            </div>
            <br/><br/><br/><br/>
            <div className="row container">
                <CardContainer/>
            </div><br/><br/><br/><br/>
            <div className="row container">
                <MediaBox
                    imgSrc1 = "https://materializecss.com/images/sample-1.jpg"
                    imgSrc2 = "https://materializecss.com/images/sample-1.jpg"
                    imgSrc3 = "https://materializecss.com/images/sample-1.jpg"
                    imgSrc4 = "https://materializecss.com/images/sample-1.jpg"
                />
                <MediaBox
                    imgSrc1 = "https://materializecss.com/images/sample-1.jpg"
                    imgSrc2 = "https://materializecss.com/images/sample-1.jpg"
                    imgSrc3 = "https://materializecss.com/images/sample-1.jpg"
                    imgSrc4 = "https://materializecss.com/images/sample-1.jpg"
                />
                
            </div>

        </div>
        <div className="parallax-container">
            <div className="parallax"><img src="https://i.ytimg.com/vi/daC2shE4KYo/maxresdefault.jpg" alt="secondimg" style={styles.imgStyle} /></div>
        </div>
        
    </>

const styles = {
    imgStyle: {
        width: '100%'
    }
}

export default ParallaxContainer