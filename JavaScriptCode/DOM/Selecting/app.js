const allImages = document.getElementsByTagName('img');
// getElementsByTagName  ->select one than one thing at time      return html collection,iterable,can use length property
// getElementsByClassName  ->select one than one thing at time    return html collection,iterable,can use length property
// getElementsById  

for (let img of allImages) {
    console.log(img.src);
}

// also can manupulate thing in Object


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');
//  one method for all selector    
for (let link of links) {
    console.log(link.href)
}