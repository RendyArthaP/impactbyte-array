// Soal 1
let jobPemrograman = ['Front End', 'Back End', 'Full Stack', 'Dev Ops', 'UI/UX']
document.write(`Jumlah Pekerjaan yang tersedia adalah ${jobPemrograman.length} jenis pekerjaan`)

for(let i = 0; i < jobPemrograman.length; i++) {
  document.write(`
    <ul>
      <li>
        ${jobPemrograman[i]}
      </li>
    </ul>
  `)
}

console.log(jobPemrograman)