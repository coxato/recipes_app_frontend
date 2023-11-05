import ajax from './ajax';
import { API_BASE_URL } from '../config';

const recipesRequests = {};

recipesRequests.getRecipeById = async function (id) {
    const url = `${API_BASE_URL}/recipes/getRecipe/${id}`;
    const recipe = await ajax.get(url);
    return recipe;
}


export default recipesRequests;
