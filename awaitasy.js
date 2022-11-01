console.log("person1:shows ticket");
console.log("person2:shows ticket");
const promiseWifeTick = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ticket");
  }, 3000);
});
const getPop = promiseWifeTick.then((t) => {
  console.log("wife:i have the tickets");
  console.log("hus:we should go");
  console.log("wife:i am hungry");
  return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});
const getButter = getPop.then((t) => {
  console.log("hus:i have the popcorn");
  console.log("hus:we should go");
  console.log("wife:i need butter");
  return new Promise((resolve, reject) => resolve(`${t} butter`));
});
getButter.then((t) => console.log(t));
console.log("person4:shows ticket");
console.log("person5:shows ticket");
//<span id=${user.description} hidden>${user}</span>
9347633052;
