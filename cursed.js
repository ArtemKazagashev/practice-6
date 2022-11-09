//zadanie1//
let roadMines = [false, false, false, true, true, false, false, false, false, false];
let position = roadMines.indexOf();
let healthPoints = 2;

for ( let mine of roadMines ) {
    console.log( `Танк переместился на ${++position + 1}` );
    if (mine == true) {
        --healthPoints;
        if(healthPoints > 0) console.log( 'Танк маслину поймал' );
        else {
         console.log( 'Танк dead' );
         break;
        };
    }
}
if(healthPoints > 0 ) console.log( 'Танк смог' );


//zadaniye 2//
const array = [];
for (let i = 1; i < 32; i++){
  array.push(i);
}
array.forEach(e => {
  const date = new Date(2020, 0, e);
  const day = new Intl.DateTimeFormat('ru-RU', { weekday: 'long'}).format(date);
  console.log(`${e} ЯНВАРЬ, ${day}`);
});

//zadaniya 3//

var i = 0,
  j = 0;
var max = 15;
var space = "",
  star = "";
while (i < max) {
  space = "";
  star = "";
  for (j = 0; j < max - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) star += "*";
  console.log(space + star);
  i++;
}