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
                    text="You will notice that two versions of the program are available for download - 
                    one is installer-based while the other does not need to be set up and can be launched from any location on your PC.
                    There are no differences between the installer and portable version, 
                    other than the fact that the latter will not store any data on your hard drive and can be used even from portable storage devices."
                    title = "Install it or run it as a portable application"
                    style = {styles.cardStyle}
                />
            </div>
            <div className = "col s12 m4 l4">
                <Card
                    imgsrc="https://rtgstudios.in/folderspark/etu.jpg"
                    link="index.html"
                    title="Lock folders to prevent unauthorized access"
                    text="When launching the application for the first time, you will have to create a master password,
                    which will be required every time you use the program in the future. It can be changed at any time,
                    but make sure you do not forget it.
                    Folder Spark enables you to select any folder on your PC and lock it using the master password.
                    Users will not be able to open the folder until it is unlocked, but no record of locked folders is kept by the application."
                    style = {styles.cardStyle}
                />
            </div>
            <div className = "col s12 m4 l4">
                <Card
                    imgsrc="https://rtgstudios.in/folderspark/strongp.png"
                    link="index.html"
                    title="Encrypt files and send passwords via e-mail"
                    text="The utility can be used to password-protect individual files, and you have the option of sending the key to a specified
                    e-mail address when encrypting an item. 
                    The decryption process is similar, just make sure you don’t misplace any of your passwords.

                    As far as folder lockers and file encryptors go, Folder Spark doesn’t offer the most comprehensive
                    feature set, but it can still be a good choice for many users, especially those who like to keep things simple.
                    The UI is not particularly impressive, but this isn’t necessarily a big issue."
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