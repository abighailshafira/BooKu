import API_ENDPOINT from '../globals/api-endpoint';

class TransaksiDB {
  static async listTransaksi() {
    const response = await fetch(API_ENDPOINT.LIST_TRANSAKSI);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }

  // static async deleteTransaksi(id){
  //   const response = await fetch(API_ENDPOINT.DELETE_TRANSAKSI(id));
  //   return response.json();
  // }

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
    //   window.location.assign("http://localhost:8080/")
      alert('TRANSAKSI BERHASIL!!!');
      // window.location.assign("http://localhost:8080/#/inputpage")
      location.reload();
    } else{
      alert('TRANSAKSI GAGAL ');
    }
    console.log('INI RESPON SAYA harusnya jadi status ', response.status);

    return response.status;
  }
}

export default TransaksiDB;
