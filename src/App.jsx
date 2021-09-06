import React from 'react'
import Hello from './Hello'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" components={Hello}></Route>
        <Route exact path="/about" components={About}></Route>
        <Route exact path="/projects" components={Projects}></Route>
      <Hello />
      </Switch>
      <Footer />
    </>
  )
}

export default App
