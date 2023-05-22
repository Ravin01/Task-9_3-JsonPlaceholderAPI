// Main Function
async function show() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let res1 = await res.json();
    console.log(res1);
    // Getting all values
    for (let i = 0; i < res1.length; i++) {
        // Creating div
        let divCol = document.createElement('div');
        divCol.classList.add('col');
        // using bootstrap card
        let divCard = document.createElement('div');
        divCard.classList.add('card');
        // card body
        let divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');
        // card title
        let divTitle = document.createElement('h4');
        divTitle.classList.add('card-title');
        divTitle.innerHTML = `UserId : ${res1[i].userId}`;
        // text for id
        let divText1 = document.createElement('p');
        divText1.classList.add('card-text');
        divText1.innerHTML = `Id : ${res1[i].id}`;
        // text for title
        let divText2 = document.createElement('p');
        divText2.classList.add('card-text');
        divText2.innerHTML = `Title : ${res1[i].title}`;

        let row = document.getElementById('row');
        // append the data
        divCardBody.append(divTitle, divText1, divText2);
        divCard.append(divCardBody)
        divCol.append(divCard);
        row.append(divCol);
    }
}