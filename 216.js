function stars(n) {
  let state = 6;
  let result = "";
  for (i = 1; i < state; i++) {
    for (j = 0; j < i; j++) {
      result += n;
    }
    result += "\n";
  }
  console.log(result);
}

stars("*");
