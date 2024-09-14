const nayok = {
    name :'shakib khan',
    id : 121,
    address : 'Cineplex',
    isSingle: true,
    friends : ['Apu', 'salman', 'aamir', 'raaz'],
    car :{
        brand: 'tesla',
        price: 5000000,
        made: 2025,
        movies:[{name:'moner manus', year:2014, actress:'apu biswas'}, {name: 'priya amar jan', year:2015, ovinoy:'shakib khan',},],
        act: function(){
            console.log('Acting like shakib khan');
        },
        manufacturer:{
            name:'tesla',
            ceo: 'Elon Mask',
            country: 'USA',
        }
    }
}
console.log(nayok.car.movies)
console.log(nayok.car.act); //problem on console!!!!!!
nayok.car.act();
