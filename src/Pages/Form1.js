import React, { Component } from "react";

class Form1 extends Component {
  state = {
    name: "",
    data: [],
  };
  async requestData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/");

    if (response.ok) {
      let json = await response.json();
      console.log(json);
      alert("success fetch data");
      this.setState({ data: json });
    } else {
      alert("HTTP-Error $(response.status)");
    }
  }

  render() {
    let showInfo = "";
    if (this.state.data && this.state.data.length) {
      showInfo = "Have Data";
    } else {
      showInfo = "No Data";
    }
    return (
      <div>
        <button className="btn btn-success" onClick={() => this.requestData()}>
          Get Data
        </button>
        <br />
        {showInfo}
      </div>
    );
  }
}

export default Form1;
