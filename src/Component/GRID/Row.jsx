import React from 'react';
import Cell from './Cell';
import CellImage from './CellImage';

export default class Row extends React.Component {
  constructor(props){
    super(props)
  
  }
 
  generateRow=(data,index)=>{
    let keys=Object.keys(data);
    return keys.map((item)=>{
      if(item !=="ImageURL" ){
      return (
        <Cell data={data[item]}/>
      )
      }else{
       return( <CellImage data={data[item]}/>)
      }
    })
   
  }

  render(){
    let rowData = this.generateRow(this.props.data,this.props.key);
    console.log(rowData,"jbjb")

    return (
      <div className="row-Container" id={this.props.index}>
          {rowData}
          <div className="btn-container">
             <div className="add-to-cart" onClick={this.props.addQty.bind(this,this.props.index)}>ADD TO CART</div>
             <div className="add-qty" onClick={this.props.addQty.bind(this,this.props.index)}>+</div>
            <div className="quantity">{this.props.data.quantity}</div>
             <div className="remove-qty" onClick={this.props.removeQty.bind(this,this.props.index)}>-</div>
          </div>
        
      </div>
    );
  }}


