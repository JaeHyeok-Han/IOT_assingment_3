function makeArr(n, k) {
  const arr = Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * Math.pow(2, k));
  }
  return arr;
}

function com(arr1, arr2) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) count++;
  }
  return count / arr1.length;
}

function iter(k) {
  const test = [10, 100, 500, 1000, 5000, 10000];

  const averArr = Array.from(Array(6), () => Array());
  for (let i = 0; i < 10; i++) {
    test.forEach((ele, i) => {
      const arr1 = makeArr(ele, k);
      const arr2 = makeArr(ele, k);
      averArr[i].push(com(arr1, arr2));
    })
  }
  console.log(averArr);

  return averArr.map(ele => {
    let sum = 0;
    ele.forEach(el => {
      sum += el;
    })
    return sum / 10;
  })
}

function makeChart(data) {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [10, 100, 500, 1000, 5000, 10000],
      datasets: [{
        label: '평균값',
        data: data,
        borderColor: [
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  return myChart;
}

const input = document.querySelector('input');
const btn = document.querySelector('button');
let chart = null;
btn.addEventListener("click", () => {
  if (chart !== null) chart.destroy();
  chart = makeChart(iter(input.value));
})