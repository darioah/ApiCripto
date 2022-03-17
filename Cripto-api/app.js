let endpoint = 'https://api.binance.com/api/v3/ticker/price'
fetch(endpoint)
    .then( respuesta => respuesta.json() )
    .then( datos => mostrarData(datos))
    .catch( e => console.log(e))


const mostrarData = (data)=>{
    console.log(data)
    let body = ''
    for (let i=0; i < 17; i++) {
        body += `<tr><td>${data[i].symbol}</td><td>USD ${data[i].price}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}    