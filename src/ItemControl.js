import React from "react";



function ItemControl(props){
  return(
  <div>
    <button onClick={props.deleteLastItem} disabled={props.noItemsFound}>
      Delete Last Item
    </button>
  </div>
  
  
  
  );
}

export default ItemControl