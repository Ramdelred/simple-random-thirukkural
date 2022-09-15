urlEndpoint = "https://api-thirukkural.vercel.app/api?num="

const textDiv = document.getElementById("text");

const addNewKural = ()=> {
    const randNum = Math.floor(Math.random() * 1330)+1;
    const promise = fetch(urlEndpoint+randNum)
    promise.then((response)=>{
        return response.json();
    }).then((data) => {
        textDiv.innerText = data.line1 + "\n" + data.line2;
    })

}

document.getElementById("next").addEventListener("click",addNewKural);
window.addEventListener('load',addNewKural);

