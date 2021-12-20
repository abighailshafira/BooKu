/* eslint-disable no-console */
import FormRegister from '../../utils/form-register';

const RegisterPage = {
  async render() {
    return `
      <div id="formRegisterContainer"></div>
    `;
  },

  async afterRender() {
    await FormRegister.init({
      formRegisterContainer: document.querySelector('#formRegisterContainer'),
    });
  },
};

export default RegisterPage;
