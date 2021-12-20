import LoginDb from '../../data/logindb';
import FormLogin from '../../utils/form-login';

const LoginPage = {
  async render() {
    return `
    <div id="formLoginContainer"></div>`;
  },

  async afterRender() {
    const data = await LoginDb.detailRestaurant('rqdv5juczeskfw1e867');

    await FormLogin.init({
      formLoginContainer: document.querySelector('#formLoginContainer'),
      id: data.restaurant.id,
    });
  },
};

export default LoginPage;
