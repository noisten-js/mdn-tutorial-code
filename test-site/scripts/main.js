// /*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
myHeading.className='make-blue';

const myTester = document.querySelector('#tester')
with (myTester.style) {
    color="red"
    fontSize="22px"
    border="5px solid #999999"
    padding="10px"
    borderRadius="10px"
}

const myImg = document.querySelector("img")
with (myImg.style) {
    backgroundColor="white"
    padding="2rem 5rem"
    maxWidth="10%"
    borderRadius="40px"
}

function do_the_thing(obj) {
    alert("Text:\n"+obj.innerText+'\n\n'+"HTML: "+obj.innerHTML)
}

paragraphs = document.querySelectorAll("p")
for (let i=0; i<paragraphs.length; i++) {
    paragraphs[i].addEventListener('click', function() {do_the_thing(paragraphs[i])})
}

function do_the_other_thing() {
    uls = document.querySelectorAll("ul")
    for (let i=0; i<uls.length; i++) {
        uls[i].display = block
    }
}

body = document.querySelectorAll("body")
body.addEventListener('click', function() {do_the_other_thing()})
// */