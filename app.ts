/*
* File: app.ts
* Author: Lehoczki Patrícia
* Copyright: 2021, Lehoczki Patrícia
* Group: Szoft II/N
* Date: 2021-12-02
* Github: https://github.com/lehoczkipatricia
* Licenc: GNU GPL
*/
var url = './cars.json';

class Car{
    id: number;
    plate: string;
    color: string;
    brand: string;
    year: number;
    capacity: number;
    fuel: string;
    price: number;
    sold: boolean;

    constructor(id: number, plate: string, color: string, brand: string, 
                year: number, capacity: number, fuel: string, price: number, sold: boolean){
                    this.id = id;
                    this.plate=plate;
            }

}


fetch(url)
.then(response => response.json())
.then(result => {
    var ul = document.getElementById('list');

    result.cars.forEach(e => {
        const car = new Car(e.id, e.plate, e.color, e.brand, e.year, e.capacity, e.fuel, e.price, e.sold);
        var li = document.createElement('li');
        li.classList.add('list-group-item');
        li.appendChild(document.createTextNode(car.plate));
        ul.appendChild(li);

    });

})
.catch(error => {
    console.log('Hiba!');
    console.log(error);
})


 