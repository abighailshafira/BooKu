/* eslint-disable no-console */

// import UrlParser from '../../routes/url-parse';
import { createFormRegisterTemplate } from '../templates/template-creator';
import FormReviewInitiator from '../../utils/form-register';

const Register = {
  async render() {
    return `
    <div class="content">
    
    </div>`;
  },
  async afterRender() {
    // const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('.content');
    // const review = document.querySelector('.detail-form');
    // const data = await RestaurantDbSource.detailRestaurant('rqdv5juczeskfw1e867');
    restaurantContainer.innerHTML = createFormRegisterTemplate();

    // await FormReviewInitiator.init({
    //   formReviewContainer: document.querySelector('#formReviewContainer'),
    //   id: data.restaurant.id,
    // });
  },
};

export default Register;
