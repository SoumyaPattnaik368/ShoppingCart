import React from 'react';



export default class CellImage extends React.Component {
  constructor(props){
    super(props)
  
  }
 


  render(){
    return (
      <div className="cellImage-Container">
         <img src={this.props.data}></img>
      </div>
    );
  }}


