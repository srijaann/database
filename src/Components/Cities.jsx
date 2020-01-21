import React, { Component } from "react";
import axios from "axios";
import { Card, CardGroup, Form, Button } from "react-bootstrap";

export default class Cities extends Component {
  state = {
    cities: [],
    city_id:"",    
    city: "",
    country_id: ""
  };

  submitHandler = e => {
    e.preventDefault();
    // console.log(this.state);
    let request = {
        city_id :this.state.city_id,
      city: this.state.city,
      country_id: this.state.country_id    };
    //console.log(request);
    axios
      .post("http://localhost:3200/city", request)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
     this.render()
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  citi = axios.get("http://localhost:3200/getcities")
  .then(res => {
    const citi = res.data.slice(0, 100);
       this.setState({ cities: citi });
  });

  render() {
    let { city_id,city, country_id } = this.state;
    return (
      <React.Fragment>
        <Form
          onSubmit={this.submitHandler}
          style={{
            width: "50%",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "80px",
            marginBottom: "80px",
            border: "2px solid rgb(206,212,218)",
            padding: "30px"
          }}
        >
          <Form.Group>
            <Form.Label>City Name</Form.Label>
            
            <Form.Control
              type="text"
              name="city"
              placeholder="City Name"
              value={city}
              onChange={this.onChangeHandler}
            /><br></br>
            <Form.Text className="text-muted">
              We will update the data for you
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Country ID</Form.Label>
            <Form.Control
              name="country_id"
              value={country_id}
              onChange={this.onChangeHandler}
              type="number"
              placeholder="Country ID"
            />
          </Form.Group>

          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>

        <CardGroup>
          {this.state.cities.map(city => (
            <Card
              key={city.city_id}
              style={{
                minWidth: "30%",
                textAlign: "center",
                padding: "25px",
                marginRight: "auto",
                marginLeft: "auto"
              }}
            >
              <Card.Title>{city.city_id}</Card.Title>
              <Card.Title>{city.city}</Card.Title>
              <Card.Text>{city.last_update}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Country code: {city.country_id}
              </Card.Subtitle>
            </Card>
          ))}
        </CardGroup>

        {/* Form,Form.Group,Button,Form.Label,Form.Control */}
      </React.Fragment>
    );
  }
}
