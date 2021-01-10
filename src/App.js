import React, { Component ,useState} from "react";
import { MDBIcon} from 'mdbreact';
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const formatNumber = (number) => new Intl.NumberFormat("en", { minimumFractionDigits: 2 }).format(number);
const App =() =>{
  const [roomCount,setRoomCount]=useState(1)
  const [adultCount,setAdultCount]=useState(1)
  const [childrencount,setChildrenCount]=useState(0)
  const roomPlus=()=>{
    setRoomCount(roomCount+1);
    if(adultCount <=roomCount){
      setAdultCount(roomCount+1);
    }
  }
  const adultPlus=()=>{
    setAdultCount(adultCount+1);
  }
  const childrenPlus=()=>{
    setChildrenCount(childrencount+1);
  }
  const roomMinus=()=>{
    setRoomCount(roomCount-1);
    if(adultCount <=roomCount){
      setAdultCount(roomCount+1);
    }
  }
  const adultMinus=()=>{
    setAdultCount(adultCount-1);
    if(adultCount+childrencount-1<roomCount){
      setRoomCount(roomCount-1)
    }
  }
  const childrenMinus=()=>{
    setChildrenCount(childrencount-1);
    if(adultCount+childrencount-1<roomCount){
      setRoomCount(roomCount-1)
    }
  }
    return (
      <div class="product-list">
        <div class="main-body">
        <p><MDBIcon icon="users" /><span class="font-color">Choose number of <span class="bold-font">people</span></span></p>
        <div class="outer-part">
<div class="rooms"> 
<span class="left-side">
<span> <MDBIcon icon="bed" class="padding-right"/> <label class="label">ROOMS</label></span>
</span>
<span class="right-side">
<button class="minus-button" onClick={roomMinus} disabled={roomCount<2}>-</button>{roomCount}<button class="plus-button" onClick={roomPlus} disabled={roomCount>4}>+</button>
</span>

</div>
<div class="audults"> 
<span class="left-side">
<span ><MDBIcon icon="user-alt"  class="padding-right font-color"/> <label class="label">ADULTS</label></span>
</span>
<span class="right-side">
<button class="minus-button" onClick={adultMinus} disabled={adultCount<2}>-</button>{adultCount}<button class="plus-button" onClick={adultPlus} disabled={adultCount+childrencount>=4*roomCount}>+</button>
</span>
</div>
<div class="children"> 
<span class="left-side">
<span> <MDBIcon icon="child" class="padding-right"/><label class="label">CHILDREN </label></span>
</span>
<span class="right-side">
<button class="minus-button" onClick={childrenMinus} disabled={childrencount<1}>-</button>{childrencount}<button class="plus-button" onClick={childrenPlus} disabled={adultCount+childrencount>=4*roomCount}>+</button>
</span>
</div>
        </div>
        </div>
        
    </div>
  );
  
}

export default App;
