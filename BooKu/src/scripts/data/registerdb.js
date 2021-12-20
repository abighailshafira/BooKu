/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import API_ENDPOINT from '../globals/api-endpoint';

class RegisterDb {
  static async storeRegister(registerData) {
    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });

    console.log(response.status);

    if (response.status == 201) {
      window.location.assign('http://localhost:8080/');
      alert('Registrasi Berhasil');
    } else {
      alert('Registrasi Gagal');
    }

    return response.status;
  }
}

export default RegisterDb;
