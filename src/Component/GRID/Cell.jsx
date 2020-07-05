import React from 'react';



export default class Cell extends React.Component {
  constructor(props){
    super(props)
  
  }
 


  render(){
   
    return (
      typeof(this.props.data)!=="number"&&!this.props.flag?<div className="cell-Container">
          {this.props.data}  
      </div>:
      typeof(this.props.data)!=="number"&&this.props.flag?<div className="cell-Container-mrp">
      {this.props.data}  
  </div>:
      ""
    );
  }}


