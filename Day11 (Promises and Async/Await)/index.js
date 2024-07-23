//Activity 1

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
}).then(() => {
  console.log("Promise Resolved");
}); //Task 1

new Promise((resolve, reject) => {
  let bool = false;
  setTimeout(() => {
    if (bool) {
      resolve();
    } else reject();
  }, 2000);
})
  .then(() => {
    console.log("Promise Resolved after 2 sec");
  })
  .catch(() => {
    console.log("Promise Rejected after 2 sec");
  }); //Task 2

//Activity 2

const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Alice", age: 30 });
    }, 1000);
  });
};

const fetchProductData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ product: "Widget", price: 50 });
    }, 1500);
  });
};

fetchUserData()
  .then((userData) => {
    console.log("User data:", userData);
    return fetchProductData();
  })
  .then((productData) => {
    console.log("Product data:", productData);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  }); //Task 3

//Activity 3

const Promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Async promise resolved");
  }, 1500);
});

async function asyncPromise() {
  const response = await Promise3;
  console.log(response);
}

asyncPromise(); //Task 4

const Promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Async promise rejected");
  }, 1000);
});

async function rejectPromise() {
  try {
    const response = await Promise4;
    console.log(response);
  } catch (error) {
    console.log("ERROR :", error);
  }
}

rejectPromise(); //Task 5

//Activity 4

fetch("https://api.github.com/users/sameer0820")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error)); //Task 6

async function fetchData() {
  const response = await fetch("https://api.github.com/users/sameer0820");
  const data = await response.json();
  console.log(data);
}

fetchData(); //Task 7

//Activity 5

console.time("promise.all");
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 5 resolved");
  }, 3500);
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 6 resolved");
  }, 3000);
});

const promise7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 7 resolved");
  }, 4000);
});

Promise.all([promise5, promise6, promise7]).then((messages) => {
  messages.forEach((value) => {
    console.log(value);
  });
  console.timeEnd("promise.all");
}); //Task 8

Promise.race([promise5, promise6, promise7]).then((e) => {
  console.log("First promise to finish: ", e);
}); //Task 9
