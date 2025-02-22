function js3(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => explore(data))
}
function explore(data){             //ekhane data na likhe onno kisu likle o hoto
    for(const user of data){
        console.log(user.email)
    }
}