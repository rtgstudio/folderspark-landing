<<<<<<< HEAD
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

 
=======
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

 
>>>>>>> 251b314c3133973a6c481a318a25bfc8cd9d5cc1
export default Landing