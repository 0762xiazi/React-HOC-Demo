import React,{Component} from 'react';
import Form from '../components/FormComponent/Form'
import Input from '../components/FormComponent/Input'

export default class FormEdit extends Component{
  render() {
    return (
      <Form>
        <div>
          <label>姓名：</label>
          <Input v_model="name" inputType={'text'}/>
        </div>
        <div>
          <label>密码：</label>
          <Input v_model="pwd" inputType={'password'}/>
        </div>
        <div>
          <label>电话：</label>
          <Input v_model="phone" inputType={'number'}/>
        </div>
      </Form>
    )
  }
}
