import React from 'react'

const makanans = [
    {
        nama : "bakso",
        harga : 10000
    },
    {
        nama : "soto",
        harga : 20000
    },
    {
        nama : "mie ayam",
        harga : 7000
    },
    {
        nama : "batagor",
        harga : 15000
    },
]

// reduce
const Total_bayar = makanans.reduce((total_harga, makanans) => {  // definisikan function
    return total_harga + makanans.harga; // update isi function menggunakan return
}, 0); // mengambil nilai awal sebelum total (dijumlahkan)

// map dan filter 
const Map = () => {
    return (
        <div>
            <h2>Map saja</h2>
            <ul>
                {makanans.map((makanan, index) => (
                    <li>{index+1} {makanan.nama} - harga {makanan.harga}</li>
                ))}
            </ul>
            <h2>MAP menggunakan filter dari harga yang lebih dari 10000</h2>
            <ul>
                {makanans
                .filter((makanan) => makanan.harga > 10000) //  .filter untuk memfilter data (makanans)
                .map((makanan, index) => ( // .map untuk memunculkan data (makanans)
                    <li>{index+1} {makanan.nama} - harga {makanan.harga}</li>
                ))}
            </ul>
            <h2>Total harga : {Total_bayar}</h2>
             {/* merender atau memunculkan function yang sudah dibuat atau didefinsikan di atas */}
        </div>
    )
}

export default Map



