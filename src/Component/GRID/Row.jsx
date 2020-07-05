import React from 'react';
import Cell from './Cell';
import CellImage from './CellImage';

export default class Row extends React.Component {
  constructor(props){
    super(props)
  
  }
 
  generateRow=(data,index)=>{
    let keys=Object.keys(data),flag=false;
    return keys.map((item)=>{
      if(item !=="ImageURL" ){
        if(item!=="MRP"){
      return (
        <Cell data={data[item]}/>
      )}else{
        return(
          <Cell data={data[item]} flag={true}/>
        )
      }
      }else{
       return( <CellImage data={data[item]}/>)
      }
    })
   
  }

  render(){
    let rowData = this.generateRow(this.props.data,this.props.key);
  

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


