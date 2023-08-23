let catogary_head = document.getElementById('catogary_head')
let catogary = document.querySelectorAll("#catogary")
let para = document.getElementById('para')
let div=document.getElementById('menu_item')
const division=document.createElement('div')
const price=document.createElement('p')
const item=document.createElement('h2')
const img_tag=document.createElement('img')

fetch('./javascript/menu.json')
.then(data => data.json())
.then(json => {
    catogary.forEach((item) => {
        item.addEventListener('click', () => {
            for (let index = 0; index < json.length; index++) {
                
                if (item.innerText == json[index].catogary) {
                    catogary_head.innerText = json[index].catogary
                    para.innerText = json[index].para
                }
                }
            })
        })
    }
    )
let price_list="Popular Items"
catogary.forEach((item)=>{
    item.addEventListener('click',()=>{
        let item_name="";
        let img_tag=document.createElement("img")
        let x=""
        let price_tag="";
        fetch('./javascript/menu.json')
        .then(data => data.json())
        .then(json =>{
            for (let index = 0; index < json.length; index++) {
                
                if(item.innerText==json[index].catogary){
                    let m=json[index].img;
                    let price=json[index].price;
                    let item=json[index].item;
                    x+=`
                    <div style="width:350px" >
                    <img src=${m} height="200px" width="100%" style="object-fit:cover" />
                    <div style="display:flex;align-items:center;justify-content:space-between;padding-left:10px;padding-right:10px;">
                    <h4>${item}</h4>
                    <p><span>$</span>${price}</p>
                    </div>
                    </div>
                    `    
                    
                }   
            }
            div.innerHTML=x
            div.style.display="flex"
            div.style.flexDirection="row"
            div.style.flexWrap="wrap"
            div.style.alignItems="center"
            div.style.justifyContent="space-between"
            div.style.gap="2rem"
            div.style.textAlign="center"
            
            
            div.append(item_name)
            
            // div.style.border="1px solid black"
        })
    })
})