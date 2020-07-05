import React from 'react';
import Grid from "./Component/GRID/Container"
import './App.css';

let obj={},qty="",flag=false,totalQuantity=0,totalAmount=0,priceObj={};
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
      priceObj[index]=priceVal*qty.toFixed(2)
      return eachItem.Price = updatedPrice,eachItem.MRP = updatedMRP,eachItem.quantity = qty
    }
  })
  totalQuantity = this.state.listData.map(n => n.quantity).reduce((a, b) => a + b, 0);
 totalAmount= Object.keys(priceObj).reduce((sum,key)=>sum+parseFloat(priceObj[key]||0),0);
console.log(priceObj,"totalAmount")
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
          priceObj[index]=priceVal*qty.toFixed(2)
          return eachItem.Price = updatedPrice,eachItem.MRP = updatedMRP,eachItem.quantity = qty
        }
      }else if(eachItem.quantity==1){
        if(position == index){
         let pricePerQty=obj[position],
          price=pricePerQty[0],
          priceVal=price.split(" ")[1];
          priceObj[index]=priceVal*0
          return eachItem.quantity = eachItem.quantity-1
        }
        
      }
    })
    totalQuantity = totalQuantity-1;
    totalAmount= Object.keys(priceObj).reduce((sum,key)=>sum+parseFloat(priceObj[key]||0),0);
    this.setState({listData:listData})

}

modalPopup=()=>{
  document.getElementById("myModal").style.display="block"
}

close=()=>{
  document.getElementById("myModal").style.display="none"
}


  render(){
    console.log(totalQuantity,"listData-->render")
    return (
      <div className="shoppingCartContainer">
        <h2>Welcome To My Shopping Cart Application</h2>
        <div className="cart-wrapper">
          <Grid
           listData={this.state.listData} 
           quantity={this.state.quantity}
           addQty={this.addQty}
           removeQty={this.removeQty}/>
        </div>
        <div className="footer">
          <div className="orderDetails">
            <div className="quantity">Quantity : {totalQuantity} </div>
            <div className="totalPrice">Total : {totalAmount}</div>
          </div>
          <div className="checkoutBtn" onClick={this.modalPopup}>CHECKOUT</div>
        </div>
       <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" id="close" onClick={this.close}>&times;</span>
        <p>Total Price : Rs {totalAmount} </p>
        <p>Transaction Successfull </p>
      </div>
    </div>
      </div>
    );
  }}


