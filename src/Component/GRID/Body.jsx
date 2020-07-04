import React from 'react';
import Row from './Row';
import Cell from './Cell';


export default class Body extends React.Component {
  constructor(props){
    super(props)

  }
 
  generateRow=(data,quantity)=>{
    let arrData= data;
   return arrData.map((item,index)=>{
    console.log(index,"arrData")
        return(
            <Row
            data={item}
            index={index}
            quantity={quantity}
            addQty={this.props.addQty}
            removeQty={this.props.removeQty}/>
        )
    })
}

  render(){
      let bodyData = this.generateRow(this.props.listData,this.props.quantity)
    return (
      <div className="body-Container">
           {bodyData}
      </div>
    );
  }}


