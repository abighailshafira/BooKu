/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable eqeqeq */
import API_ENDPOINT from '../globals/api-endpoint';

class TransaksiDb {
  static async listTransaksi() {
    const response = await fetch(API_ENDPOINT.LIST_TRANSAKSI);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async chart(id) {
    const response = await fetch(API_ENDPOINT.CHART(id));
    return response.json();
  }

  static async deleteTransaksi(id) {
    const response = await fetch(API_ENDPOINT.DELETE_TRANSAKSI(id));
    return response.json();
  }

  static async storeTransaksi(transaksiData) {
    const response = await fetch(API_ENDPOINT.TRANSAKSI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaksiData),
    });

    if (response.status == 201) {
      // alert('Data Transaksi Berhasil Ditambahkan');
      location.reload();
    } else {
      alert('Data Transaksi Gagal Ditambahkan');
    }

    return response.status;
  }
}

export default TransaksiDb;
