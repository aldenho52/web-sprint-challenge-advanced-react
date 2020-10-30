import React, { Component, useState } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  state = {
    plants: [],
    filteredPlantsInput: ''
  }

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants
  componentDidMount() {
    axios.get('http://localhost:3333/plants')
      .then(res => {
        this.setState({
          plants: res.data.plantsData
        })
        console.log(this.state.plants)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // STRETCH filter input

  handleSearchInput = (e) => {
    this.setState({
      filteredPlantsInput: e.target.value,
      plants: this.state.plants.filter((plant) => {
        return plant.name.toLowerCase().indexOf(this.state.filteredPlantsInput.toLowerCase()) !== -1
      })
    })
  }

  // componentDidMount() {
  //   this.setState({
  //     plants: JSON.parse(window.localStorage.getItem('plants'))
  //   })
  // }

  // componentDidUpdate() {
  //   window.localStorage.setItem('plants', JSON.stringify(this.state.plants))
  // }



  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
      <input 
        type='text' 
        placeholder='Search Plants...'
        onChange={this.handleSearchInput}
        value={this.state.filteredPlantsInput}
      />
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" data-testid="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
