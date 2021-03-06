import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Login from './containers/Login'
import Register from './containers/Register'
import Vaccines from './containers/Vaccines'
import Home from './containers/Home'

const App = () => (
  <Router basename="/demo-app">
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/vaccines" component={Vaccines} />
            <Route exact path="/" component={Home} />
            <Redirect to='/' />
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
