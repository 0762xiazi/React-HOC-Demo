import React,{Component} from 'react';

export default class Game extends Component{

  render() {
    return  [0,1,2,3,4,5,6,7,8].map(i=>{
      return (
        <div key={i} className="board-row">{i}</div>
      )
    });
  }
}
