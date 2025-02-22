function js3(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => explore(data))
}
function explore(data){             //ekhane data na likhe onno kisu likle o hoto
    const ul = document.getElementById('ul-con');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li)
        
        
    }
   
}