const book={name:'programmig sikhi',id:101,price:500,color:'green'};

// const price=book.price;

// console.log(price);

const{id,color,price}=book;
console.log(id);

const company ={
    name:'eShikhon',
ceo:{

    name:'i dont know who is he',
    id:1,
    food:'chainees'
},
web:{
      
    work:'website development',
    employe:11,
    framework:'react',
tehc:{
frist:'html',
second:'css',
third:'tailwind',
final:'js'
}
}
}

// const js=company.web.tehc.final;
// const style=company.web.tehc.final
// console.log(style);

// console.log(company.ceo.name);

const tail=company?.web?.tehc?.third;
 console.log(tail);









