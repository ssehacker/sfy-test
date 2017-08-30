import  React from 'react';
import './NewFormPage.css';
import NewForm from '../../components/NewForm/NewForm';

export default class NewFormPage extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="NewFormPage">
        <NewForm title="孙冯艳" desc="孙冯艳是个傻瓜" />
      </div>
    )
 }
}