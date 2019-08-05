import React, {Component} from 'react'
import Main from './main'



import M from 'materialize-css'

class Landing extends Component {
    componentDidMount() {   
        M.AutoInit()
    }
    render() { 
        return ( 
            <>
                <Main />  
            </>
        );
    }
}

 
export default Landing