const THRESHOLD_A = 8; // can use zero 0 to guarantee error

function headerFunction() {
  return new Promise(function tetheredGetNumber(resolve, reject) {
    setTimeout(() => {
      const randomInt = Date.now();
      const value = randomInt % 10;
      if (value < THRESHOLD_A) {
        resolve(value);
      } else {
        reject(`Too large: ${value}`);
      }
    }, 500);
  })
}

let p = headerFunction()
p.then(function determineParity(value) {
  const isOdd = value % 2 === 1;
  return { value, isOdd };
}, function troubleWithGetNumber(reason) {
  const err = new Error("Trouble getting number", { cause: reason });
  console.error(err);
  throw err;
}).then(function promiseGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;
    if (value >= THRESHOLD_A - 1) {
      reject(`Still too large: ${value}`);
    } else {
      parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
      resolve(parityInfo);
    }
  });
}).then(function(info) {
    console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
    return info;
  }).catch(function(reason) {
    if (reason.cause) {
      console.error("Had previously handled error");
    } else {
      console.error(`Trouble with promiseGetWord(): ${reason}`);
    }
  }).finally((info) => console.log("All done"));

 

// Output:
// Got: 6, even
// All done
