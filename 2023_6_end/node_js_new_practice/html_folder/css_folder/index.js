let btn = document.querySelector('#btn')
let response = document.querySelector('user_list')

btn.addEventListener('click', doAjax)

function doAjax() {
    let request = new XMLHttpRequest()
    request.addEventListener('load', () => {
        if (request.responseText){

        }else{
            response.innerHTML = request.responseText
        }
        
    })

    //request.open('GET', 'https://book.niceinfos.com/frontend/api/?action=demo')
    request.open('GET', 'http://127.0.0.1:5500/about.html')
    request.send()
}