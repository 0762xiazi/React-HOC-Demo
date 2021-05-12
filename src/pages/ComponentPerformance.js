/**
 * 反向继承 跟踪组件性能
 */
import  React,{Component} from 'react';

class Children extends Component {
  render() {
    return <h1>被反向继承的组件</h1>
  }
}

function withTiming(WrappedComponent) {
  return class withTimingHOC extends WrappedComponent {
    constructor(props) {
      super(props);
      this.start = 0;
      this.end = 0;
    }

    componentWillMount() {
      super.componentWillMount && super.componentWillMount();
      this.start = Date.now();
    }

    componentDidMount() {
      super.componentDidMount && super.componentDidMount();
      this.end = Date.now();
      console.log(`${WrappedComponent.name} 组件渲染时间为 ${this.end - this.start} ms`);
    }

    render() {
      return super.render();
    }
  }
}

export default withTiming(Children)
