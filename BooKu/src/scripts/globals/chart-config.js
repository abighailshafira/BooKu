/* eslint-disable linebreak-style */
const configChart = {
  type: 'line',
  data: {
    labels: ['January', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    datasets: [{
      label: 'Grafik Per- bulan',
      data: [2000000, 2200000, 200000, 4000000, 5000000],
      borderColor: '#3d405b',
    }],
  },
  options: {
    responsive: true,
    mainAspectRatio: false,
  },
};

export default configChart;
