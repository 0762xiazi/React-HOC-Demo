import React,{Component} from 'react';
import addressApi from '../api/address'
import AddressList from "../components/Address/AddressList";

class TraditionWay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      addressType:'收货地址',

    }
  }

  getAddressData=async ()=>{
    const data = await addressApi.fetchCompanyAddresses();
    this.setState({
      data:data.data
    });
  }

  componentDidMount() {
    this.getAddressData()
  }

  render() {
    if(this.state.data.length) {
      return (
        <AddressList {...this.state} editClick={addressApi.editClick}/>
      )
    }
    return (
      <div>暂无数据</div>
    )
  }

}
export default TraditionWay
