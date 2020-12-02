import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import Search from './components/Search'

class App extends React.Component {

  state = {
    food: [...foods],
    searchedWord: ''
  }

  changeSearchedWord = (_value) => {
    this.setState({searchedWord: _value})
  }

  checkForIncludedFood = () => {
    const filteredFoods = this.state.food.filter((food)=>{
      return food.name.toLowerCase().includes(this.state.searchedWord.toLowerCase())
    })
    return filteredFoods
  }

  renderFood = () => {
    const finalArrayOfFoods = this.checkForIncludedFood()
    return finalArrayOfFoods.map((food, index)=>{
      return(
        <FoodBox
          key={index} 
          name={food.name} 
          calories={food.calories}
          image={food.image}
        />   
      )
    })
  }


  render(){
    return (
      <div className="App">
        <Search changeSearchedWord={this.changeSearchedWord}/>
        {this.renderFood()}
      </div>
    );
  }
}

export default App;
