import React,{Component} from 'react';

class ButtonItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: 'buttonTitle'
    }
  }
  clickComponent(){
    console.log('按钮点击')
  }
  render() {
    return <button onClick={this.clickComponent}>{this.state.title}</button>
  }
}

export default ButtonItem
