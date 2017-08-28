import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Sidebar from '../containers/Sidebar'
import Board from '../containers/Board'

const App = () =>
  <Router>
    <div style={{ display: 'flex', height: '-webkit-fill-available' }}>
      <aside style={{ flex: 'none', ...style.aside }}>
        <Header />
        <Sidebar />
      </aside>

      <main style={{ flex: 1, padding: '1rem' }}>
        <Route exact path="/:user/:board" component={Board} />
      </main>
    </div>
  </Router>

const style = {
  aside: { backgroundColor: 'hsl(0, 0%, 98%)', borderRight: '1px solid hsl(0, 0%, 93%)' }
}

export default App
