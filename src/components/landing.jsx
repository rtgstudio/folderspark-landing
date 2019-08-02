import React, {Component} from 'react'
import Main from './main'
import Navbar from './navbar'

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
                
            </>
        );
    }
}

 
export default Landing