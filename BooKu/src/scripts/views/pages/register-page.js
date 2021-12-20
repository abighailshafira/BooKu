/* eslint-disable no-console */
import LoginDb from '../../data/logindb';
import FormRegister from '../../utils/form-register';

const RegisterPage = {
  async render() {
    return `
      <div id="formRegisterContainer"></div>
    `;
  },

  async afterRender() {
    const data = await LoginDb.detailRestaurant('rqdv5juczeskfw1e867');

    await FormRegister.init({
      formRegisterContainer: document.querySelector('#formRegisterContainer'),
      id: data.restaurant.id,
    });
  },
};

export default RegisterPage;
