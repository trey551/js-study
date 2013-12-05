document.addEventListener('DOMContentLoaded', main, false);
function main(){
    getRandomBlock({
        holder: "div.holder",
        selector: "img"
    });
}

function getRandomBlock(opts){
    var sel = '', space = ' ';
    sel = sel.concat(opts.holder, space, opts.selector);
    var blocks = document.querySelectorAll(sel);
    for(var i = 0; i < blocks.length; i++){
        blocks[i].style.display = 'none';
    }
    function getRandomNumber(num){
        var randomNumber = Math.floor(Math.random() * num);
        return randomNumber;
    }
    blocks[getRandomNumber(blocks.length)].style.display = "block";
}


