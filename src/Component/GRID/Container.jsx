import React from 'react';
import Body from './Body';
import Row from './Row';
import Cell from './Cell';


export default class Container extends React.Component {
  constructor(props){
    super(props)
  
  }
 

  render(){
    return (
      <div className="Container">
          <Body addQty={this.props.addQty} removeQty={this.props.removeQty} listData={this.props.listData } quantity={this.props.quantity}/>
      </div>
    );
  }}


