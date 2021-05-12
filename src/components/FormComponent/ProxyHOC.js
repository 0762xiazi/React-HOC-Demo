import React from 'react';
import PropTypes from 'prop-types';

function ProxyHOC(WrappedComponent){
  return class ProxyHOC extends React.Component {
    static contextTypes = {
      model: PropTypes.object,
      changeModel: PropTypes.func
    }
    onChange = (event) => {
      const { changeModel } = this.context;
      const { onChange } = this.props;
      const { v_model } = this.props;
      changeModel(v_model, event.target.value);
      if(typeof onChange === 'function'){onChange(event);}
    }

    render() {
      const { model } = this.context;
      const { v_model } = this.props;
      return <WrappedComponent
        {...this.props}
        value={model[v_model]}
        onChange={this.onChange}
        type={this.props.inputType}
      />;
    }
  }
}

export default ProxyHOC
