function animar() {
    let navi = document.querySelector('.wave-support')
    let ondaTotal = document.querySelector('.wave1')
    let ondaTotal2 = document.querySelector('.wave2')
    let ondaTotal3 = document.querySelector('.wave3')
    let ondaTotal4 = document.querySelector('.wave4')
    let ondaBotao = document.querySelector('.liquid')
    navi.classList.toggle('active')
    ondaTotal.classList.toggle('active')
    ondaTotal2.classList.toggle('active')
    ondaTotal3.classList.toggle('active')
    ondaTotal4.classList.toggle('active')
    ondaBotao.classList.toggle('active')
}

function menuHamburguer() {
    let navigation = document.querySelector('.navigation')
    let spanTotal1 = document.querySelector('.firstLine')
    let spanTotal2 = document.querySelector('.secondLine')
    let spanTotal3 = document.querySelector('.thirdLine')
    let naviTopic = document.querySelector('.navigation-topic')

    navigation.classList.toggle('active')
    spanTotal1.classList.toggle('active')
    spanTotal2.classList.toggle('active')
    spanTotal3.classList.toggle('active')
    naviTopic.classList.toggle('active')
}

