const times = [60, 75, 79, 80, 55, 59];
//const times = [10, 10, 10, 10, 10, 10];
let media = times.reduce( (suma, index) => suma + index, times[0] ) / (times.length + 1);
alert("Media=" + media + " de {" + times + "}");