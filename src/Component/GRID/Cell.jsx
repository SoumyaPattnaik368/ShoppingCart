import React from 'react';



export default class Cell extends React.Component {
  constructor(props){
    super(props)
  
  }
 


  render(){
      console.log(typeof(this.props.data),"propscell")
    return (
      typeof(this.props.data)!=="number"?<div className="cell-Container">
          {this.props.data}  
      </div>:""
    );
  }}


