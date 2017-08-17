import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Sidebar from '../containers/Sidebar'
import Board from '../containers/Board'

const App = () =>
  <Router>
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar variant={{ flex: 'none' }} />
        <main style={{ flex: 1 }}>
          <Route exact path="/:user/:board" component={Board} />
        </main>
      </div>
    </div>
  </Router>

export default App
