import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Game from './components/game'
import './mock/addressData'
import ReceiptAddress from "./pages/ReceiptAddress";
import TicketAddress from './pages/TicketAddress'
import OfficeAddress from './pages/OfficeAddress'
import TraditionWay from './pages/TraditionWay'
import ReverseInheritance from './pages/ReverseInheritance'
import ComponentPerformance from './pages/ComponentPerformance'
import FormEdit from './pages/FormEdit'

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path='/Game' component={Game} />
          {/*传统方式*/}
          <Route path='/TraditionWay' component={TraditionWay} />
          {/*收货地址*/}
          <Route path='/ReceiptAddress' component={ReceiptAddress} />
          {/*寄票地址*/}
          <Route path='/TicketAddress' component={TicketAddress} />
          {/*办公地址*/}
          <Route path='/OfficeAddress' component={OfficeAddress} />
          {/*反向继承*/}
          <Route path='/ReverseInheritance' component={ReverseInheritance} />
          <Route path='/ComponentPerformance' component={ComponentPerformance} />
          {/*双向绑定*/}
          <Route path='/FormEdit' component={FormEdit} />
        </Router>
      </div>
    )
  }
}

export default App
