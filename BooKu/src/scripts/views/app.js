/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import UrlParser from '../routes/url-parse';
import routes from '../routes/routes';
import configChart from '../globals/chart-config';

class App {
  constructor({ drawer, content }) {
    this._drawer = drawer;
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    /* reder page data chart */
    const canvasElement = document.getElementById('ChartTotal');
    const ChartTotal = new Chart(canvasElement, configChart);
    
    /* skip link */
    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#maincontent').focus();
  }
}
export default App;
