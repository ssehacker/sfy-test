import React from  'react';
import { withRouter } from 'react-router'
import './AddButton.css';

class AddButton extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor....');
  }

  componentWillMount() {
    console.log('componentWillMount...');
  }

  componentDidMount() {
    console.log('componentDidMount...');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate...');
  }

  componentDidMount() {
    console.log('componentDidMount...');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount...');
  }

  onClick() {
    const history = this.props.history;
    history.push('/NewFormPage');
  }

  render() {
    console.log('render...');
    return(
      <div className="NewButton">
        <button onClick={this.onClick.bind(this)}>+</button>
      </div>
    )
  }
}

export default withRouter(AddButton);