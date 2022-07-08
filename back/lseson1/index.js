const mode = process.env.MODE;

if (mode === "production") {
  console.log("App in production mode!");
  process.exit(0);
}

console.log("App in DEV (!!!) mode!");

const args = process.argv;
const userName = args[2];
const userAge = args[3];

const nodePath = args[0].split("/").pop();
const scriptPath = args[1].split("/").pop();

if (!userAge) {
  console.log(["Try: ", nodePath, " ", scriptPath, " Vasya 18"].join(""));
  process.exit(1);
}

if (userName) {
  console.log(`Hello, ${userName}! Вам ${userAge} лет`);
} else {
  console.log("Hello, NodeJS!", userAge);
}

process.exit(0);
