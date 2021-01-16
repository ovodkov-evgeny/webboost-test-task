let product = { 
       "29231": {
        "name": "Парикмахерское кресло «Норм» гидравлическое",
        "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
        "price": "9900",
    },
       "29232": {
           "name": "Парикмахерское кресло «Норм» гидравлическое",
           "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
           "price": "9900",
    },
       "29233": {
           "name": "Парикмахерское кресло «Норм» гидравлическое",
           "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
           "price": "9900",
    },
       "29234": {
           "name": "Парикмахерское кресло «Норм» гидравлическое",
           "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
           "price": "9900",
    },
       "29235": {
           "name": "Парикмахерское кресло «Норм» гидравлическое",
           "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
           "price": "9900",
    },
       "29236": {
           "name": "Парикмахерское кресло «Норм» гидравлическое",
           "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
           "price": "9900",
    },
       "29237": {
           "name": "Парикмахерское кресло «Норм» гидравлическое",
           "img": "http://dev-wbooster.ru/test_task/img/img-1.png",
           "price": "9900",
       },
};

let out = '';
for (let key in product) {
    out+='Наименование: ' + product[key].name + '<br>';
}
document.getElementById('out').innerHTML = out;
