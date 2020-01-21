import React, { Component } from "react";
import axios from "axios";

export default class City extends Component {
  state = {
    loading: true,
    city: []
  };
  async componentDidMount() {
    const url = "http://localhost:3200/getcities";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ city: data[0], loading: false });

    let shortCity = [];
    shortCity = { ...data.slice(0, 20) };
    this.setState({ city: shortCity });
    
  }

  render() {
    const { city } = this.state;
 
    return (
      <React.Fragment>
        {this.state.loading || !this.state.city ? (
          <div>Loading...</div>
        ) : (

          city.map(ct=>{
            return(

              <div key={ ct.city_id} >

                <h1>{ ct.city_id}</h1>
              </div>
            )
          })
          
          //           city.map(ct =>{
          // return (
          //   <div key={city.city_id}>helo</div>
          // )

          // }
          // )
        )}
        {/* {this.state.loading || !this.state.city ? (
          <div>Loading...</div>
        ) : (<div>
          {this.state.city.map(ct=>{
           return (
             <div>
              { console.log(ct)}
             </div>
           )
          })}


        </div>
    
        )} */}
      </React.Fragment>
    );
  }
}
