import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../views/Home.jsx'

const Page1 = React.lazy(() => import('../views/Page1.jsx'))

function Router() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/page1">
        <Suspense fallback={<div>Loading...</div>}>
          <Page1 />
        </Suspense>
      </Route>
      <Redirect from="/*" to="/home" />
    </Switch>
  )
}

export default Router
