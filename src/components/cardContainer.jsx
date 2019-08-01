// Will contain cards
import React from 'react'
import Card from './card'

const CardContainer = () => {
    return(
        <div className = "row">
            <div className = "col s12 m4 l4">
                <Card
                    imgsrc = "https://rtgstudios.in/folderspark/yu.png"
                    link = "index.html"
                    title = "First title"
                    text = "First text"
                    style = {styles.cardStyle}
                />
            </div>
            <div className = "col s12 m4 l4">
                <Card
                    imgsrc="https://rtgstudios.in/folderspark/etu.jpg"
                    link="index.html"
                    title="Second title"
                    text="Second text"
                    style = {styles.cardStyle}
                />
            </div>
            <div className = "col s12 m4 l4">
                <Card
                    imgsrc="https://rtgstudios.in/folderspark/strongp.png"
                    link="index.html"
                    title="Third title"
                    text="Third text"
                    style = {styles.cardStyle}
                />
            </div>
        </div>
    )
}

const styles = {
    cardStyle : {
        height: '100%'
    }
}

export default CardContainer