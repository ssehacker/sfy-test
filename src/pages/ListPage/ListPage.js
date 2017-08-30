import React from 'react';
import List from '../../components/List/List';
import './App.css';
import  AddButton from '../../components/AddButton/AddButton'

class ListPage extends React.Component {
  render() {
    return (
      <div className="App">
        <List />
        <AddButton />
      </div>
    );
  }
}

export default ListPage;
