//配列の宣言と値の代入
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

let index = 0;

//リストの中身を繰り返し処理ですべて取り出す
while (index < 16 ) {
  console.log(holidays[index]);
  index++;
}

for (let i = 0; i < 16; i++) {
  console.log(holidays[i])
}



