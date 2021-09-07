function Result() {
  var array = [
    { name: "Иванов О. В.", value: 10 },
    { name: "Иванов Олег Иваныч", value: 5 },
    { name: "Иванов Илья Петрович", value: 10 },
    { name: "Петров Петр Петрович", value: 15 },
    { name: "Сидоров Сергей Иваныч", value: 10 },
    { name: "Сидоров Иван Иваныч ", value: 10 },
  ];

  // вычисление значения на основе массива с помощью функции "reduce ()"

  // "total" принимает результат предыдущего вызова функции
  // "item" - это следующий элемент массива

  var groupByNames = array.reduce((total, item) => {
    // разбиение имен по пробелу в массиве с последующим разделением по первому элементу
    var splittedNames = item.name.split(" ");
    var slicedNames = splittedNames.slice(0, 1);

    // суммирование значений
    total[slicedNames] = (total[slicedNames] || 0) + item.value;

    // Возвращаем сумму
    return total;
  }, {});

  // Вывод объекта на страницу
  return (
    <div className="container">
      {Object.keys(groupByNames).map((key) => (
        <div key={key}>
          {key}: {groupByNames[key]}
        </div>
      ))}
    </div>
  );
}

export default Result;
