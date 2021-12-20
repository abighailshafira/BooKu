import API_ENDPOINT from '../globals/api-endpoint';

class TransaksiDb {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_TRANSAKSI);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async chart(id) {
    const response = await fetch(API_ENDPOINT.CHART(id));
    return response.json();
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }

  static async deleteTransaksi(id){
    const response = await fetch(API_ENDPOINT.DELETE_TRANSAKSI(id));
    return response.json();
  }

  static async reviewRestaurant(review) {
    const response = await fetch(API_ENDPOINT.TRANSAKSI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });

    console.log(response.status);
    
    if (response.status == 201) {
      alert('Data Transaksi Berhasil Ditambahkan');
      location.reload();
    } else{
      alert('Data Transaksi Gagal Ditambahkan');
    }

    return response.status;
  }
}

export default TransaksiDb;
