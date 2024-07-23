function clicar(){
    var nome=window.document.getElementById('nick')
    var novonome=window.document.getElementById('txtnome')
    nome.innerHTML=(novonome)
}
function clique(){
    var image=window.document.getElementsByClassName('fotoperfil')
    var novaimg=window.document.getElementById('txtimg')
    image.src=novaimg
}