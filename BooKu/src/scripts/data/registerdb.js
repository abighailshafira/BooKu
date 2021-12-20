import API_ENDPOINT from '../globals/api-endpoint';

class RegisterDb {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }

  static async reviewRestaurant(review) {
    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });

    console.log(response.status);
    
    if (response.status == 201) {
      window.location.assign("http://localhost:8080/")
      alert('Registrasi Berhasil');
    }else{
      alert('Registrasi Gagal');
    }

    return response.status;
  }
}

export default RegisterDb;
