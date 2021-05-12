/**
 * 属性代理-高阶组件
 */
import React from 'react';
const AddressHOC = ({WrappedComponent, fetchingMethod, defaultProps,editClick}) => {
  return class AddressHOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data:[]
      }
    }
    async componentDidMount() {
      const data = await fetchingMethod();
      this.setState({
        data:data.data
      });
    }

    render() {
      if(this.state.data && this.state.data.length){
        return (
          <WrappedComponent
            data={this.state.data}
            {...defaultProps}
            {...this.props}
            editClick={editClick}
          />
        );
      }
      return (<div>{defaultProps.emptyTips}</div>)
    }
  }
}

export default AddressHOC
