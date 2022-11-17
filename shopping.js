let table = document.querySelector(".table");
let detailDiv = document.querySelector(".detailDiv");
async function fetchData () {
        let response = await fetch ("https://fakestoreapi.com/products/");
        let data = await response.json();
        console.log(data);
for (let i=0; i<data.length ; i++) {
    table.innerHTML += `
        <tr onclick="singleDataFetch(${data[i].id})">
            <td>${data[i].id}</td>
            <td><image src="${data[i].image}"/></td>
            <td>${data[i].title}</td>
            <td>$${data[i].price}</td>
        </tr>`;    
}
}
function deleteDiv() {
    document.querySelector(".detailDiv").classList.add("d-none");
 }

 //Detail Show
fetchData();
async function singleDataFetch(id){
    document.querySelector(".detailDiv").classList.remove("d-none")
    let response = await fetch ("https://fakestoreapi.com/products/" + id);
    let data = await response.json();
    detailDiv.innerHTML = `
            <img class="w-100-height-250" src="${data.image}" alt="">
            <p><span>Title - </span>${data.title}</p>
            <p><span>Category - </span>${data.category}</p>
            <p><span>Description - </span>${data.description}</p>
            <p><span>Rating - </span>${data.rating.rate}</p>
            <button class="detail-btn">Tap to order</button>
            <button onclick = "deleteDiv()" class="detail-btn">Delete</button>
    `
    
}

