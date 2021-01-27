// Soal 4
let matkul1 = ['Math', 'English', 'Programming']
let matkul2 = ['Geography', 'Spanish', 'Programming']

for(let i = 0; i < matkul1.length; i++) {
  for(let j =0; j < matkul2.length; j++) {
    if(matkul1[i] == matkul2[j]) {
      console.log(true)
      // console.log(matkul1[i])
    } else {
      console.log(false)
      // console.log(matkul2[i])
    }
  }
}





