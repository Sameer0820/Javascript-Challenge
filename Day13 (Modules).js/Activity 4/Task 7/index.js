import axios from "axios";
axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        console.log("User data:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error.message);
    });