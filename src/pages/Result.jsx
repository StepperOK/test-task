var array = [
  { name: "Иванов О. В.", value: 10 },
  { name: "Иванов Олег Иваныч", value: 5 },
  { name: "Иванов Илья Петрович", value: 10 },
  { name: "Петров Петр Петрович", value: 15 },
  { name: "Сидоров Сергей Иваныч", value: 10 },
  { name: "Сидоров Иван Иваныч ", value: 10 },
];

var groupByNames = array.reduce((total, item) => {
  var splittedNames = item.name.split(" ");
  var slicedNames = splittedNames.slice(0, 1);

  total[slicedNames] = (total[slicedNames] || 0) + item.value;

  return total;
}, {});
