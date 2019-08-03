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
</Switch>