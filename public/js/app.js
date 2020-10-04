const TypeWrite = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordsIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

TypeWrite.prototype.type = function() {
    const current = this.wordsIndex % this.words.length;
    const fullTxt = this.words[current];
    if (this.isDeleting) {
        // remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;
    let typeSpeed = 100;
    if (this.isDeleting) {
        typeSpeed /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordsIndex++;
        typeSpeed = 700;
    }
    setTimeout(() => {
        this.type();
    }, typeSpeed);
}


window.addEventListener('DOMContentLoaded', (event) => {
    init();
});

function init() {
    console.log('init');
    const txtElement = document.getElementById("text-banner-animation");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    new TypeWrite(txtElement, words, wait);
}