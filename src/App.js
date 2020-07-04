import React from 'react';
import Grid from "./Component/GRID/Container"
import './App.css';

let obj={},qty="",flag=false,totalQuantity="";
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      listData:[]
    }
  }


 
  componentDidMount=()=>{
    let url ="./Fixtures/GroceriesList.json";
    fetch(url).then((response)=>{
      return response.json();
    }).then((response)=>{
      
      response.data.map((eachItem,index)=>{
        obj[index]=[eachItem.Price,eachItem.MRP,eachItem.quntity]
      })
      this.setState({
        listData:response.data,
        listDataReference:response.data
      })
    })

}

addQty=(position)=>{
  let listData=this.state.listDataReference;
  listData.map((eachItem,index)=>{
    if(position == index){
      qty=(eachItem.quantity+1);
      let pricePerQty=obj[position],
      price=pricePerQty[0],
      MRPPrice=pricePerQty[1],
      priceVal=price.split(" ")[1],
      mrpVal=MRPPrice.split(" ")[1];
      let updatedPrice="Rs"+ " " + priceVal*qty.toFixed(2),
      updatedMRP="MRP"+ " "+ mrpVal*qty;
      return eachItem.Price = updatedPrice,eachItem.MRP = updatedMRP,eachItem.quantity = qty
    }
  })

console.log(totalQuantity,"totalQuantity")
 this.setState({listData:listData})

}

removeQty=(position)=>{
    let listData=this.state.listData;
    listData.map((eachItem,index)=>{
      if(eachItem.quantity>1){
        if(position == index){
          let qty=(eachItem.quantity-1),
          pricePerQty=obj[position],
          price=pricePerQty[0],
          MRPPrice=pricePerQty[1],
          priceVal=price.split(" ")[1],
          mrpVal=MRPPrice.split(" ")[1];
          let updatedPrice="Rs"+ " " + priceVal*qty.toFixed(2),
          updatedMRP="MRP"+ " "+ mrpVal*qty;
          console.log(updatedPrice)
          return eachItem.Price = updatedPrice,eachItem.MRP = updatedMRP,eachItem.quantity = qty
        }
      }else if(eachItem.quantity==1){
        if(position == index){
          return eachItem.quantity = eachItem.quantity-1
        }
        
      }
    })
this.setState({listData:listData})

}


  render(){
    console.log(totalQuantity,"listData-->render")
    return (
      <div className="shoppingCartContainer">
        <div className="cart-wrapper">
          <Grid
           listData={this.state.listData} 
           quantity={this.state.quantity}
           addQty={this.addQty}
           removeQty={this.removeQty}/>
        </div>
        <div className="footer">
          <div className="orderDetails">
            <div className="quantity">Quantity : {} </div>
            <div className="totalPrice">Total : {}</div>
          </div>
          <div className="checkoutBtn">CHECKOUT</div>
        </div>
      </div>
    );
  }}


