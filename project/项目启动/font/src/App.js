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
import Map from './map/Map'
import Map2 from './map/Map2'
import Pay from './pay/Pay'
import CityList from './citylist/CityList'
import Message from './message/Message'
export default class App extends Component {
  render() {
    return (
      <div>
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
                  <Route exact path='/detail/:homeid' component={Detail}/>
                  <Route exact path='/dream' component={Dream}/>
                  <Route exact path='/loginin' component={Loginin}/>
                  <Route exact path='/item' component={Item}/>
                  <Route exact path='/realName' component={RealName}/>
                  <Route exact path='/aticleDetail/:id' component={AticleDetail}/>
                  <Route exact path='/renthome' component={Renthome}/>
                  <Route exact path='/tradeDetail/:homeid' component={Tradedteail}/>
                  <Route exact path='/password' component={Password}/>
                  <Route exact path='/map/:homeid' component={Map}/>
                  <Route exact path='/mapp' component={Map2}/>
                  <Route exact path='/pay/:tradeid' component={Pay}/>
                  <Route exact path='/message' component={Message}/>
                  <Route exact path='/citylist' component={CityList}/>
                </Switch>
                {/* <AticleDetail/> */}
              </div>
            </Router> 
      </div>
     
    )
  }
}
