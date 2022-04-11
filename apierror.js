const showOutput=document.querySelector("#output")

const url="https://mystery-api.kushanksriraj.repl.co/get"

fetch(url)
.then((res)=>{
    return res
}).then((data)=>{
    if (data.status===401){
        showOutput.innerText="you can't logged";
    }else if(data.status===404){
        showOutput.innerText="page not found";
    }else if (data.status===200){
        showOutput.innerText="working"
    }
})