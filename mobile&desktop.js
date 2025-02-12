// pages/index.js

export default function Home() {
  const data = [
    {
      no: 1,
      nim: '232505053',
      nama: 'Wini Winarti',
      gender: 'Perempuan',
      prodi: 'Sistem Informasi',
      kelas: 'A',
      semester: 4,
      alamat: 'Solokanjeruk',
      hobby: 'Membaca',
      citaCita: 'Software Engineer',
    },
    {
      no: 2,
      nim: '232505054',
      nama: 'Nisa Nurul Ain',
      gender: 'Perempuan',
      prodi: 'Teknik Elektro',
      kelas: 'B',
      semester: 6,
      alamat: 'Cicalengka',
      hobby: 'Menari',
      citaCita: 'Electrical Engineer',
    },
    {
      no: 3,
      nim: '232505055',
      nama: 'Salza Afryad Rahman',
      gender: 'Perempuan',
      prodi: 'Teknik Elektro',
      kelas: 'B',
      semester: 4,
      alamat: 'Rancaekek',
      hobby: 'Bernyanyi',
      citaCita: 'Electrical Engineer',
    },
  ];

  return (
    <div className="container mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Data Mahasiswa</h1>

      {/* Tampilan Desktop */}
      <div className="hidden lg:block">
        <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-xs sm:text-sm">No</th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm">NIM</th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm">Nama</th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm">Gender</th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm">Prodi</th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm">Kelas</th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm">Semester</th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm">Alamat</th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm">Hobby</th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm">Cita-cita</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((item) => (
              <tr className="hover:bg-gray-100" key={item.no}>
                <td className="px-4 py-3 text-xs sm:text-sm">{item.no}</td>
                <td className="px-4 py-3 text-xs sm:text-sm">{item.nim}</td>
                <td className="px-4 py-3 text-xs sm:text-sm">{item.nama}</td>
                <td className="px-4 py-3 text-xs sm:text-sm">{item.gender}</td>
                <td className="px-4 py-3 text-xs sm:text-sm">{item.prodi}</td>
                <td className="px-4 py-3 text-xs sm:text-sm">{item.kelas}</td>
                <td className="px-4 py-3 text-xs sm:text-sm">{item.semester}</td>
                <td className="px-4 py-3 text-xs sm:text-sm">{item.alamat}</td>
                <td className="px-4 py-3 text-xs sm:text-sm">{item.hobby}</td>
                <td className="px-4 py-3 text-xs sm:text-sm">{item.citaCita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tampilan Mobile - Card Layout */}
      <div className="lg:hidden mt-10">
        {/* Map data mahasiswa ke dalam tampilan card untuk mobile */}
        {data.map((item) => (
          <div className="bg-white shadow-md rounded-lg p-4 mb-4" key={item.no}>
            <p className="font-bold text-lg">No: {item.no}</p>
            <p><strong>NIM:</strong> {item.nim}</p>
            <p><strong>Nama:</strong> {item.nama}</p>
            <p><strong>Gender:</strong> {item.gender}</p>
            <p><strong>Prodi:</strong> {item.prodi}</p>
            <p><strong>Kelas:</strong> {item.kelas}</p>
            <p><strong>Semester:</strong> {item.semester}</p>
            <p><strong>Alamat:</strong> {item.alamat}</p>
            <p><strong>Hobby:</strong> {item.hobby}</p>
            <p><strong>Cita-cita:</strong> {item.citaCita}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
