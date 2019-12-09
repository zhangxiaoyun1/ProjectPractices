import React, { Component } from 'react'
import './index.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import AddHome from './addHome/AddHome'
import CarouselPage from './carousel/CarouselPage'
import AppTaber from './AppTaber/AppTaber'
import Login from './login/Login'
import Renthome from './rentHome/Renthome'
import RentWiki from './rentWiki/Rentwiki'
import My from './my/My'
import Set from './set/Set'
import Detail from './detail/Detail'
import Loginin from './loginin/Loginin'
import Dream from './dream/Dream'
import Item from './item/Item'
import RealName from './realName/Realname'
import AticleDetail from './aticleDetail/AticleDetail'
import Tradedteail from './tradeDetial/Tradedetial'
import Password from './password/Password'

export default class App extends Component {
  render() {
    return (
      <Router basename='/'>
        <div>
          {/* <CarouselPage />  */}
          <Switch>
            <Route exact path='/' component={CarouselPage} />
            <Route exact path='/appTaber' component={AppTaber} />
            <Route exact path='/addhome' component={AddHome} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/rentWiki' component={RentWiki} />
            <Route exact path='/my' component={My} />
            <Route exact path='/set' component={Set} />
            <Route exact path='/detail' component={Detail}/>
            <Route exact path='/dream' component={Dream}/>
            <Route exact path='/loginin' component={Loginin}/>
            <Route exact path='/item' component={Item}/>
            <Route exact path='/realName' component={RealName}/>
            <Route exact path='/aticleDetail' component={AticleDetail}/>
            <Route exact path='/renthome' component={Renthome}/>
            <Route exact path='/tradeDetail' component={Tradedteail}/>
            <Route exact path='/password' component={Password}/>
          </Switch>
          {/* <AticleDetail/> */}
        </div>
      </Router>
    )
  }
}
