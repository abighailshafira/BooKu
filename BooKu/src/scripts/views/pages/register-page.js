/* eslint-disable no-console */
import LoginDb from '../../data/logindb';
// import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FormRegister from '../../utils/form-register';

const RegisterPage = {
  async render() {
    return `

      <div id="formRegisterContainer"></div>
    `;
  },
  async afterRender() {
    // const restaurantContainer = document.querySelector('.detail');
    // const review = document.querySelector('.detail-form');

    const data = await LoginDb.detailRestaurant('rqdv5juczeskfw1e867');
    // restaurantContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);
    
    await FormRegister.init({
      formRegisterContainer: document.querySelector('#formRegisterContainer'),
      id: data.restaurant.id,
    });
  },
};

export default RegisterPage;
