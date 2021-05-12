import React,{Component} from 'react';

class AddressList extends Component {
  render() {
    const addressItems = this.props.data.map((item,index)=>{
      return (
        <tr key={index}>
          <td>{this.props.addressType}</td>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>{item.address}</td>
          <td>
            <button onClick={()=>this.props.editClick(item)}>编辑</button>
          </td>
        </tr>
      )
    })
    return <table border={1} cellSpacing={0} cellPadding={10}>
      <thead>
      <tr>
        <th>类型</th>
        <th>姓名</th>
        <th>电话</th>
        <th>详细地址</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      {addressItems}
      </tbody>
    </table>
  }
}
export default AddressList
