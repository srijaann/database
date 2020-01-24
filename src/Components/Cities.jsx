import React, { Component } from "react";
import axios from "axios";
import "./City.css";

export default class Cities extends Component {
  state = {
    cities: [],
    city_id: "",
    city: "",
    country_id: ""
  };

  submitHandler = e => {
    e.preventDefault();
    // console.log(this.state);
    let request = {
    
      city: this.state.city,
      country_id: this.state.country_id
    };
    //console.log(request);
    axios
      .post("http://localhost:3200/newcity", request)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    this.render();
  };

  onDeleteCity = async city_id => {
    city_id = prompt();

    await axios.delete(`http://localhost:3200/deletecity/${city_id}`);
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  citi = axios.get("http://localhost:3200/getcities").then(res => {
    const citi = res.data.slice(0, 100);
    console.log(citi);

    this.setState({ cities: citi });
  });

  render() {
    let { city_id, city, country_id } = this.state;
    return (
      <React.Fragment>
        <div>
          <form className="form-group city " onSubmit={this.submitHandler}>
            <label>City Name</label>
            <input
              type="text"
              className="form-control"
              name="city_id"
              placeholder="City Name"
              value={city}
              onChange={this.onChangeHandler}
            />
            <label>Country Name</label>
            <input
              className="form-control"
              type="text"
              name="city_id"
              placeholder="Country Name"
              value={country_id}
              onChange={this.onChangeHandler}
            />
            <br></br>
            <button type="button" className="btn btn-primary">
              Add City{" "}
            </button>{" "}
            &nbsp;
            <button type="button" className="btn btn-success">
              Update City{" "}
            </button>
            &nbsp;
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.onDeleteCity(city_id)}
            >
              Delete City{" "}
            </button>
          </form>
        </div>

        <div className="container">
          <table className="table table-striped table-light">
            <thead>
              <tr>
                <th>City ID</th>
                <th>City Name</th>
                <th>Country ID</th>
                <th>Last Update</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cities.map(city => (
                <tr>
                  <th>{city.city_id}</th>
                  <td>{city.city}</td>
                  <td>{city.country_id}</td>
                  <td>{city.last_update}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
