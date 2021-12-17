import { createFormLoginTemplate } from '../templates/template-creator.js';

const Login = {
  async render() {
    return `
    <div class="content">
      
    </div>`;
  },

  async afterRender() {
    const homeContainer = document.querySelector('.content');
    homeContainer.innerHTML = createFormLoginTemplate();

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(2334464);
			var error = 0;
			self.fields.forEach((field) => {
				const input = document.querySelector(`#${field}`);
				if (self.validateFields(input) == false) {
					error++;
				}
			});
			if (error == 0) {
				//do login api here
				localStorage.setItem("auth", 1);
				this.form.submit();
			}
		});
  },
  
};

export default Login;
