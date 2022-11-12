/*document.querySelector()  Pass something through the query selector that can take a piece of the DOM*/
/*document.querySelector("h1");  Gets the h1 id from the HTML side*/

const h1 = document.querySelector("h1");
console.log(h1);
h1.textContent = "This was changed with textContent.";

/* # gets specific element id */

const p = document.querySelector("#secondParagraph");
console.log(p);
p.textContent = "The # selects the id in the querySelector";

/*"." gets class id*/

const descriptions = document.querySelectorAll(".description"); /*querySelectorAll grabs all elements with specidfied class*/
for (let i = 0; i < descriptions.length; i++) {
    descriptions[i].textContent = i;
} /*Takes first paragraph, sets it equal to i (0), then loops to the next.*/
console.log(descriptions);
