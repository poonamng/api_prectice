const showData=document.querySelector("#show-output")
const btn=document.querySelector("#btn")

const url ="https://jsonplaceholder.typicode.com/todos"



btn.addEventListener('click',()=>{
    fetch(url)
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        data.map(item=>{
            console.log(item)
            showData.innerHTML +=`<li>${item.title}</li>`
            showData.style.color="red"
            showData.innerHTML +=`<li>${item.completed}</li>`
            showData.style.color="green"

        })
        
    })
})