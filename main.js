let contButtons = Array.from(document.getElementsByClassName('continue-reading-button'))
let learnButtons = Array.from(document.getElementsByClassName('learn-more-button'))
let singlePostButtons = Array.from(document.getElementsByClassName('date-button'))
let notHomeHeaders = Array.from(document.getElementsByClassName('not-home'))

contButtons.forEach((div)=>div.addEventListener('click', contClick));
learnButtons.forEach((div)=>div.addEventListener('click', learnClick));
singlePostButtons.forEach((div)=>div.addEventListener('click', singleClick));
notHomeHeaders.forEach((div)=>div.addEventListener('click', notHomeClick));

function contClick () {
    window.location = 'continue-reading.html';
}

function learnClick () {
    window.location = 'learn-more.html';
}

function singleClick () {
    window.location = 'blog-post.html';
}

function notHomeClick () {
    window.location = 'index.html';
}