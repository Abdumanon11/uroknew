 /* const conteinert = document.querySelector('.conteinert ') */
/* function draw(arr){
    for(let item of arr){
        const box = document.createElement('div')
        const image =document.createElement('img')
        const title = document.createElement('h3')
        const firtDesc = document.createElement('p')
        const secondDesc= document.createElement('p')
        
       box.classList.add('box')

       image.src = item.image;
        title.innerHTML = item.title;
        firtDesc.innerHTML = item.firtDesc;
        secondDesc.innerHTML = item.secondDesc;

        box.append(image,title,firtDesc, firtDesc,secondDesc)
        conteinert.append(box)

    }
} 

draw(posts)
 */
 

const conteiner = document.querySelector('.conteiner')



function market(arr) {
    for (let item of arr) {
        const conteiner1  = document.createElement('div')
        const box =document.createElement('div')
        const image =document.createElement('img')
        const box1 =document.createElement('div')
        const category = document.createElement('h3')
        const description = document.createElement('p')
        const box2 = document.createElement('div')
        const box3 = document.createElement('div')
        const price =document.createElement('h2')
        const rate = document.createElement('h2')
        const count = document.createElement('h2')
        const button = document.createElement('button')


        conteiner1.classList.add('conteiner1')
        box.classList.add('box')
        box1.classList.add('box1')
        box2.classList.add('box2')
        box3.classList.add('box3')

        image.src = item.image;
        category.innerHTML = item.category;
        description.innerHTML = item.description;
        price.innerHTML = item.price;
        rate.innerHTML = item.rate;
        count.innerHTML = item.count;
        button.innerHTML = "В избранное";

        conteiner1.append(box)
        box.append(image,box1,box2,)
        box1.append(category,description)
        box2.append(box3,button)
        box3.append(price,rate,count)
        conteiner.append(conteiner1)

        



}
}
market(arr)









