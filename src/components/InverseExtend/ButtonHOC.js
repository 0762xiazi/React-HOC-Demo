/**
 * 反向继承-高阶组件
 */
import React from 'react';

const ButtonHOC = (WrappedComponent)=>  class extends WrappedComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: 'HOC继承'
    }
  }
  clickComponent(){
    console.log('HOC继承点击')
  }
  render(){
    return (
      <div>
        <div onClick={this.clickComponent}>ButtonHOC 点击</div>
        <div>{super.render()}</div>
      </div>
    )
  }
}

export default ButtonHOC
