import React from 'react'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import CV from './CV'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/cv" component={CV}></Route>
        <About />
      </Switch>
      <Footer />
    </>
  )
}

export default App
