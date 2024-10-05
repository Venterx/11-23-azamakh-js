// Тот самый массив
const developers = [
  { name: 'John', surname: 'Doe', age: 20, talk: () => { console.log('Hello world!') } },
  { name: 'Василий', surname: 'Иванов', age: 21 },
  { name: 'Екатерина', surname: 'Демидова', age: 21 },
  { name: 'Пётр', surname: 'Шереметьев', age: 19 },
];


developers.map((obj) => { 
  alert(obj.name + " Привет")
})