import React from 'react'

const Donate = () => {
    return(
        <>
            <div className = "row">
                <h4 className = "header center">Donate Us</h4><br/>
                <h4 className = "center">Please donate for the betterment of the folder spark program <br/> Even a penny counts</h4><br/>
                <p className = "center">Pay 2 USD via paypal</p>
                <p className = "center"><a href = "https://www.paypal.com/webapps/hermes?token=7NE30839A8472264Y&useraction=commit&mfid=1564820223967_60395f2f8af44"><img className = 'responsive-img' src = "https://www.paypalobjects.com/en_GB/i/btn/btn_buynowCC_LG.gif" alt = "donateimg"/></a></p><br/>
                <p className = "center">For Indian Users</p><br/>
                <p className = "center"><a href = "https://www.payumoney.com/paybypayumoney/#/325787"><img className = 'responsive-img' src = "https://www.payumoney.com//media/images/payby_payumoney/buttons/111.png" alt = "donateimg"/></a></p><br/>
            </div>
        </>
    )
}

export default Donate