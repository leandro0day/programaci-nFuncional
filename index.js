const p1 = Promise.resolve(1);

p1.then((x) => x + 5)
  .then((x) => Promise.resolve(x + 5))
  .then((x) => Promise.reject("Error algo salio mal"))
  .catch((e) => console.log(e));

const delayed = (x) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(x), 5000));

delayed(7)
  .then((x) => {
    console.log(7);
    return delayed(x + 7);
  })
.then((x) => console.log(x))
.then((x) => Promise.reject("hubo un error :("))
.catch(e => console.log(e))


