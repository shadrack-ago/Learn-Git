function multiplyByNineFifths(number) {
    return number * (9/5);
  };
  
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
  
  getFahrenheit(15); // Returns 59
//   shows output

function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows,columns){
  return monitorCount(rows,columns)*200;
  }
  const totalCost=costOfMonitors(5,4);
  console.log(totalCost);
  console.log(costOfMonitors);