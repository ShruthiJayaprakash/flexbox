const data = [{"id":1,"username":"shru","message":"hey gal"},{"id":2,"username":"jp","message":"hey boy"}]

var userele = document.getElementsByClassName('user')
var mesele = document.getElementsByClassName('message')

var mainele = document.getElementsByClassName('main')

for( let i=0; i<data.length; i++){
    userele[i].innerHTML = data[i].username
    mesele[i].innerHTML = data[i].message
}

mainele.innerHTML = 'Loading..'