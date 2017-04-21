const React = require('react')
const ReactRouter = require('react-router-dom')
const Router = ReactRouter.BrowserRouter
const Route = ReactRouter.Route
const Switch = ReactRouter.Switch
const Navigation = require('./Navigation')
const Home = require('./Home')
const Popular = require('./Popular')
const Battle = require('./Battle')

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/popular' component={Popular} />
            <Route path='/battle' component={Battle} />
            <Route render={function () {
              return (
                <div className='container-center'>
                  <h1>Page Not Found</h1>
                </div>
              )
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App
