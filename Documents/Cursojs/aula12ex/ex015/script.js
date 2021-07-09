function verificar(){
var data = new Date ()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value.length == 0 || fano.value > ano) {

    window.alert ('erro verifique os dados e tente novamente')
} else {

    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        genero = 'homem'
        if (idade >=0 && idade <= 13) {
            //crianca
            img.setAttribute ('src', 'menino.png')
        }
        else if (idade >=14 && idade <= 30) {
            //jovem
            img.setAttribute ('src', 'jovemm.png')
        }
        else if (idade >=31 && idade <= 60) {
            //adulto
            img.setAttribute ('src', 'homem.png')
        }
        else{
            //idoso
            img.setAttribute ('src', 'velho.png')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade <= 13) {
            //crianca
            img.setAttribute ('src', 'menina.png')
        }
        else if (idade >=14 && idade <= 30) {
            //jovem
            img.setAttribute ('src', 'jovemf.png')
        }
        else if (idade >=31 && idade <= 60) {
            //adulto
            img.setAttribute ('src', 'mulher.png')
        }
        else{
            //idoso
            img.setAttribute ('src', 'velha.png')

    }
}
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)




}


}