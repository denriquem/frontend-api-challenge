import React, { Component } from "react";
import axios from "axios";

class Peeps extends Component {
  state = {
    peeps: [],
  };

  componentDidMount() {
    axios
      .get("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((res) => {
        this.setState({ peeps: res.data });
        console.log(res.data);
      });
  }

  render() {
    const peeps = this.state.peeps.map((peep) => {
      return <Peep />;
    });
    return <div>Mock Peeps</div>;
  }
}

export default Peeps;
