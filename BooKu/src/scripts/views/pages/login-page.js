import FormLogin from '../../utils/form-login';

const LoginPage = {
  async render() {
    return `
    <div id="formLoginContainer"></div>`;
  },

  async afterRender() {
    await FormLogin.init({
      formLoginContainer: document.querySelector('#formLoginContainer'),
    });
  },
};

export default LoginPage;
