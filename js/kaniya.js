// console.log("java script conectedd")
const loadQuats = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then ( data => displayQuats(data))
}
const displayQuats = quats =>{
    const quoteElement = document.getElementById('quats');
    quoteElement.innerText = quats.quote;
}