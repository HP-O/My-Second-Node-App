// const greetAfterFiveSeconds = function () {
//     console.log('Yhanks for coming!!!');
// };

// const greetingDue = setTimeout(greetAfterFiveSeconds, 5000);

// clearTimeout(greetingDue);

const greetEverySecond = function () {
  console.log("Thanks for coming!!!", new Date());
};

const greetingDue = setInterval(greetEverySecond, 1000);

setTimeout(() =clearInterval(greetingDue), 10000);

// clearTimeout(greetingDue);
