const printTriangle = (count_row) => {
  debugger;
  var i = 0, j = 0;

  let max = count_row;
  let space = "", star = "";

  while (i < max) {
    space = "";
    star = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "#";
    console.log(space + star);
    i++;
  }
}

printTriangle(4);