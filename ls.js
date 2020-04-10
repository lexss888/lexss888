function saveText(value)
{
  //Дан объект:
var obj = value.value;

//Сериализуем его в '{"name": "Иван", "arr": [1, 2, 3]}':
var json = JSON.stringify(obj);

//Запишем в localStorage с ключом obj:
localStorage.setItem('obj', json);
}
function loadText(value)
{
var json = localStorage.getItem('obj');

//Преобразуем их обратно в объект JavaScript:
var obj = JSON.parse(json);
value.value = obj;
console.log(obj);
}
