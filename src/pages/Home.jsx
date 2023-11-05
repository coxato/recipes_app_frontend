import React, { useState } from 'react';
// custom components
import HomeInput from '../components/Input/homeInput';
import RecipeItem from '../components/RecipeItem';
// style
import './styles/home.css';
// mock data
import recipesListMock from '../mocks/recipesListMock';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [ingredients, setIngredients] = useState([]);

    // need to implement onkeydown instead onchange to detect commas and Enter keys
    // also separate words and check if they are valid ingredients (ingredients table backend)
    const handleInputChange = ev => {
        const { value, key } = ev.target;
        console.log(value, key);
        setInputValue(value);
    }

    // need to implement theme mode (provider ready)
    const isDark = false;

    console.log(recipesListMock);
    return (
        <div className="home-wrapper">
            <div className="home-top" style={{ backgroundColor: isDark ? '#49416D' : '#A882DD' }}>
                <div className="home-top-titles">
                    <h1>🍲 Recipes App 📖</h1>
                    <h3>Find your perfect recipe</h3>
                </div>
            </div>

            <div className="home-bottom">
                <HomeInput 
                    value={inputValue} 
                    handleChange={handleInputChange} 
                    ingredients={ingredients}
                />
                
                <div className="recipes-list-wrapper">
                    {
                        recipesListMock.map( r => (
                            <RecipeItem key={r.id} {...r} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Home;