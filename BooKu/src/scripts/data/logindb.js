/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
import API_ENDPOINT from '../globals/api-endpoint';

class LoginDb {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }

  static async storeLogin(review) {
    const response = await fetch(API_ENDPOINT.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });

    if (response.status == 200) {
      alert('Login Berhasil');
      response.json().then((data) => {
        localStorage.setItem('auth', 1);
        localStorage.setItem('token', data.token);
        localStorage.setItem('email_user', data.user.email);
        localStorage.setItem('id_user', data.user.id);
        return data;
      });

      window.location.assign('http://localhost:8080/#/home');
      location.reload();
    } else {
      alert('Email atau password tidak sesuai');
      return response.status;
    }
  }
}

export default LoginDb;
