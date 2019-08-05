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
                    text="Strong And Random Keys Which Are Hard To Guess"
                    title = "Strong keys"
                    style = {styles.cardStyle}
                />
            </div>
            <div className = "col s12 m4 l4">
                <Card
                    imgsrc="https://rtgstudios.in/folderspark/etu.jpg"
                    link="index.html"
                    title="Instant Notification"
                    text="Get all your keys delivered to your email account instantly"
                    style = {styles.cardStyle}
                />
            </div>
            <div className = "col s12 m4 l4">
                <Card
                    imgsrc="https://rtgstudios.in/folderspark/strongp.png"
                    link="index.html"
                    title="Easy to Use"
                    text="Its Very Easy And Free To Provide Your Files .The Best Level Of Encryption"
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