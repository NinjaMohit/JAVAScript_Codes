const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

// innerText
// textContent
// innerHTML

for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}
// javascript only read styles from htmlsheet(inline styles )

window.getComputedStyle(h1);


// const h2 = document.querySelector("h2");

// h2.getAttribute("class");
// h2.setAttribute("class","purple");
// h2.setAttribute("class","border");
// const purple = h2.setAttribute("class","purple");

h2.setAttribute("class", `${purple} border`)

// class List
h2.classList.add("purple");
h2.classList.add("border");
h2.classList.remove("border");
h2.classList.contains("border");
h2.classList.contains("borihsbr");
h2.classList.toggle("border"); //turns class on and off on style


//.parentElements  ->acces parent element of elements
// .childElementsCount
//.children
// .previousElementSibling
// .previousSibling   -> gives node
// .nextElementSibling
// .nextSibling       -> gives node



// creating new elements 
// .creatElement('elementname')
// .appendChild()
// .append()
// .prepend()
// .insertAdjacentElement(position,element)
// .after()
// .removeChild()
// .remove()