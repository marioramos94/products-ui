import React, { Component } from "react";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      productName: "",
      productPrice: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      list: prevState.list.concat({
        productName: this.state.productName,
        productPrice: this.state.productPrice
      }),
      productName: "",
      productPrice: ""
    }));
  }

  handleChange(e) {
    this.setState({
      productName: e.target.value
    });
  }
  handleChange2(e) {
    this.setState({
      productPrice: e.target.value
    });
  }

  removeItem(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  }

  render() {
    return (
      <div>
        <h1>PRODUCT LIST</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.productName}
            placeholder={"Product name"}
            onChange={e => this.handleChange(e)}
          />
          <input
            value={this.state.productPrice}
            placeholder={"Product price ($)"}
            onChange={e => this.handleChange2(e)}
          />
          <button>Add</button>
          <ol>
            {this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  {item.productName}-{item.productPrice}
                  <button onClick={() => this.removeItem(index)}>Delete</button>
                </li>
              );
            })}
          </ol>
        </form>
      </div>
    );
  }
}
