function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // antes de mostrar a outra operação, limpa a que já tem.
        while (c <= 10){
            let item = document.createElement('option') // dentro do select, pra colocar opções tem que ter 'options'
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}