import React, {Component} from 'react'
import Main from './main'
import Navbar from './navbar'
import Footer from './footer'
import M from 'materialize-css'

class Landing extends Component {
    componentDidMount() {   
        M.AutoInit()
    }
    render() { 
        return ( 
            <>
                <Navbar />
                <Main />
                <Footer />
            </>
        );
    }
}

 
export default Landing