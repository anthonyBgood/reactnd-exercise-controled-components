import React, { Component } from 'react';


class ItemsAdd  extends Component{
  state = {
    value: '', 
  };


  updateValue = (Newvalue) => {
    this.setState({ value: Newvalue });
  };

  handleChange = event => {
    this.updateValue (event.target.value);
  };

  addItem = (event) => {
   event.preventDefault();
   this.props.onAddItem(this.state.value);
   this.updateValue ('');
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };


  render(){
    return (
    
      <form onSubmit={this.addItem}>
        <input
        type="text"
        placeholder="Enter New Item"
        value={this.state.value}
        onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>
          Add
        </button>
      </form>
    );
  }

}
  
export default ItemsAdd;
