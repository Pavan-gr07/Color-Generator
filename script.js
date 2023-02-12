let backgroundArray = [
    "#A653F5",
  "#8F8CF2",
  "#65B8BF",
  "#F96CFF",
  "#FA92FB",
  "#674AB3",
  "#A348A6",
  "#9F63C4",
  "#9075D8",
  "#CEA2D7",
  "#461E52",
  "#DD517F",
  "#E68E36",
  "#556DC8",
  "#7998EE",
  '#fbca1f',
  '#ffffff',
  '#969696'
];

function change(){
    let bgchange = backgroundArray.length;
    let bg = Math.floor(Math.random() * bgchange);
    let bg_value = bg;
    document.getElementById("bg_container").style.backgroundColor = backgroundArray[bg];
    document.getElementById("bg_value").innerHTML = backgroundArray[bg_value];

}