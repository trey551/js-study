document.addEventListener('DOMContentLoaded', main, false);
function main(){
    var holder = document.querySelector('.holder');
    getRandomBlock(holder, {
        selector: "div.holder img"
    });
}

function getRandomBlock(holder, opts){
    var blocks = document.querySelectorAll(opts.selector);
    function getRandomNumber(num){
        var randomNumber = Math.floor(Math.random() * num);
        return randomNumber;
    }
    blocks[getRandomNumber(blocks.length)].style.display = "block";
}


