import { WP_API_BASE_URL } from '../config';
// utils
import { JSON2FormData } from '../utils/formData';

const cartRequests = {};


cartRequests.saveInCart = async function(body) {
    const formData = JSON2FormData(body);

    try {
        const response = await fetch(`${WP_API_BASE_URL}/add_to_cart.php`, {
            method: 'POST',
            body: formData,
            credentials: 'include'
        });

        const { data, success } = await response.json();
        return { 
            cart_item_key: data?.cart_item_key, 
            preview_url: data?.customized_item_preview, 
            success 
        };

    } catch (err) {
        console.log('Error saving product in wordpress cart');
        console.log(err);
        return { cart_item_key: null, success: false };
    }
}


cartRequests.getFromCart = async function(woo_cart_item_key) {
    const formData = JSON2FormData({ woo_cart_item_key });

    try {
        const response = await fetch(`${WP_API_BASE_URL}/get_cart_item.php`, {
            method: 'POST',
            body: formData,
            credentials: 'include'
        });

        const json = await response.json();
        return json.data;

    } catch (err) {
        console.log('Error getting item from wordpress cart');
        console.log(err);
        return false;
    }
}

export default cartRequests;
