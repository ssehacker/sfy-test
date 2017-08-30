/**
 * Created by ssehacker on 2017/8/27.
 */
import  React from 'react';
import './NewForm.css';
import { Button } from 'antd';

class NewForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: props.title || '',
      desc: props.desc || '',
    };

    window.sfy = this;
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleDescChange(e) {
    this.setState({
      desc: e.target.value,
    });
  }
  addTodo(e) {
      console.log(this.state.title)
      console.log(this.state.desc)
  }
  render() {
    const title = this.state.title;
    const desc = this.state.desc;
    return(
      <div className="NewForm">
        <h3>创建新TODO</h3>
        <input type="text" value={title} onChange={this.handleTitleChange.bind(this)} />
        <textarea name="" id="" cols="30" rows="10" value={desc} onChange={this.handleDescChange.bind(this)} />
        <Button type="Primary" onClick={this.addTodo.bind(this)}>确定增加</Button>
      </div>
    )
  }
}

export default NewForm;