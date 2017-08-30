/**
 * Created by ssehacker on 2017/8/27.
 */

import React from 'react';
import './list.css';

let data = [
  {
    id: 1,
    date: '2017-8-23',
    title: '今天很开心，嘿嘿嘿'
  }, {
    id: 2,
    date: '2017-8-24',
    title: '今天很开心，嘿嘿嘿2'
  }, {
    id: 3,
    date: '2017-8-26',
    title: '今天很开心，嘿嘿嘿3'
  }
];

/*function renderList(list) {
  return list.map(item => (
    <div key={item.id} className="line">
      <span>{item.date}</span>
      <h4>{item.title}</h4>
      <p>
        <button>完成</button>
      </p>
    </div>
  ));
}*/

class List extends React.Component {
  render() {

    return (
      <div className="sfy-list">
        {/* renderList(data) */}
        {
          data.map(item => (
            <div key={item.id} className="line">
              <span>{item.date}</span>
              <h4>{item.title}</h4>
              <p>
                <button>完成</button>
              </p>
            </div>
          ))
        }
      </div>

    );
  }
}

export default List;