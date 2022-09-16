// image slide
var largImg = document.getElementById('big-img');
var smlImg = document.getElementsByClassName('tmb-img');

smlImg[0].onclick = function(){
    largImg.src = smlImg[0].src;
}
smlImg[1].onclick = function(){
    largImg.src = smlImg[1].src;
}
smlImg[2].onclick = function(){
    largImg.src = smlImg[2].src;
}
smlImg[3].onclick = function(){
    largImg.src = smlImg[3].src;
}

// cart Qty count
var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var initialCount = document.querySelector('.count');
var num = document.querySelector('#num');
var totalAmount = document.querySelector("#total");
var count=1;

function incriment(){
    count++;
    initialCount.innerHTML=count;
    num.innerHTML=count+"=";
    totalAmount.innerHTML=count*120;
}
function decriment(){
    count--;
    initialCount.innerHTML=count;
    num.innerHTML=count+"=";
    totalAmount.innerHTML=count*120;
}


// cart toggle menu
var drop = document.querySelector('#cart');

function toggleManu(){
    drop.classList.toggle('none')

}
// navbar currection
var navbar =document.querySelector('#menu');
function rmvMenu(){
    drop.classList.add('none')
}

// add items to cart

var addCart= document.querySelector('.cart-second-row');
var empty =document.querySelector('.text');

function addcart(){
    addCart.classList.remove('none')
    empty.classList.add('none')
}

// cart delete

function deltcart(){
    addCart.classList.add('none')
    empty.classList.remove('none')
}


