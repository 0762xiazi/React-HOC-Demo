import React,{Component} from 'react';
import ProxyHOC from "./ProxyHOC";

class Input extends Component{
  render() {
    return <input type={this.props.type} onChange={this.props.onChange} value={this.props.value || ''}/>
  }
}

export default ProxyHOC(Input)
