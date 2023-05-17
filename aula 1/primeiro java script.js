let valor = 0
let santos = 0
let flamengo = 0

function doarparasaopaulo(){
 valor = valor + 500
 alert('total arrecadado: ' + valor.toFixed(2))
}

function doarparasantos(){
santos = santos - 750
valor = valor + 750
alert('sao paulo: ' + valor.toFixed(2) + '\nsantos:' + santos.toFixed(2))
}

function doarparaflamengo(){
flamengo = flamengo + 10000
alert('flamengo: ' + flamengo)
}



