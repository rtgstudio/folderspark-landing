<<<<<<< HEAD
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './components/landing'
import Donate from './components/donate'
export default () =>
<Switch>
    <Route path = "/" exact component = { Landing } />
    <Route path = "/features" component = { Landing } />
    <Route path = "/developers" component = { Landing } />
    <Route path = "/donate"  component = { Donate } />
=======
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './components/landing'
import Donate from './components/donate'
export default () =>
<Switch>
    <Route path = "/" exact component = { Landing } />
    <Route path = "/features" component = { Landing } />
    <Route path = "/developers" component = { Landing } />
    <Route path = "/donate"  component = { Donate } />
>>>>>>> 251b314c3133973a6c481a318a25bfc8cd9d5cc1
</Switch>