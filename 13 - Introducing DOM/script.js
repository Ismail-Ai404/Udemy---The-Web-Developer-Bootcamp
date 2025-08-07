/** @format */

// /** @format */

// function resizeImages() {
//      const allImages = document.getElementsByTagName("img");
//      for (let img of allImages) {
//           img.style.width = "300px";
//      }
//      console.log("Resized all images using getElementsByTagName()");
// }

function resizeImages() {
     const allImages = document.getElementsByTagName("img");
     for (let img of allImages) {
          img.style.width = "300px";
     }
     console.log("🔍 All images enlarged to 300px");
}

function resetImageSize() {
     const allImages = document.getElementsByTagName("img");
     for (let img of allImages) {
          img.style.width = "200px";
     }
     console.log("🔄 All images reset to 200px");
}

function highlightTags() {
     const tagName = document.getElementById("tagInput").value.toLowerCase();
     const elements = document.getElementsByTagName(tagName);

     for (let el of elements) {
          el.classList.add("highlighted");
     }

     console.log(`🔦 Highlighted all <${tagName}> elements`);
}

function clearHighlights() {
     const all = document.querySelectorAll(".highlighted");
     for (let el of all) {
          el.classList.remove("highlighted");
     }
}

function resetDogSizes() {
     const dogs = document.getElementsByClassName("square");
     for (let dog of dogs) {
          dog.style.width = "auto";
          dog.style.height = "auto";
     }
     console.log("🐶 Dogs reset to normal size.");
}

function makeDogsSquare() {
     const dogs = document.getElementsByClassName("square");
     for (let dog of dogs) {
          dog.style.width = "250px";
          dog.style.height = "250px";
     }
     console.log("⬛ Dogs turned square again.");
}
const changeBtn = document.querySelector("#changeBtn");

changeBtn.addEventListener("click", function (e) {
     const banner = document.querySelector("#banner");
     if (!banner) return;

     const logBox = document.querySelector("#logBox");

     console.log("Original ID:", banner.id);
     logBox.innerHTML = `<p><strong>Original ID:</strong> ${banner.id}</p>`;

     // Change ID
     banner.id = "whoops";
     banner.innerText = "Thy am Whoops";
     console.log("Changed ID to:", banner.id);
     logBox.innerHTML += `<p><strong>Changed ID to:</strong> ${banner.id}</p>`;

     // Delay resetting ID back using setTimeout
     setTimeout(() => {
          const whoops = document.querySelector("#whoops");
          whoops.id = "banner";
          banner.innerText = "I am the Banner 🎉";

          console.log("Reset ID to:", whoops.id);
          logBox.innerHTML += `<p><strong>Reset ID to:</strong> ${whoops.id}</p>`;
     }, 2000);
});

const targetP = document.querySelector(".target");
const output = [];

// parentElement
const parent = targetP.parentElement;
output.push("Parent Element of target: " + parent.tagName);

// children of the familyTree
const children = parent.children;
output.push("Number of children inside #familyTree: " + children.length);

// previousSibling and nextSibling
output.push("Previous Sibling (node): " + targetP.previousSibling.nodeName);
output.push("Next Sibling (node): " + targetP.nextSibling.nodeName);

// previousElementSibling and nextElementSibling
output.push(
     "Previous Element Sibling: " + targetP.previousElementSibling.tagName
);
output.push("Next Element Sibling: " + targetP.nextElementSibling.tagName);

// Print to screen
document.getElementById("consoleOutput").textContent = output.join("\n");

const container = document.getElementById("container");

// --- prepend() ---
const pre = document.createElement("span");
pre.textContent = "Prepended!";
pre.innerHTML += ' <code>container.prepend(pre)";</code> ln 121';
pre.className = "highlight";
container.prepend(pre);

// --- append() ---
const span1 = document.createElement("span");
span1.textContent = "Appended Text";
span1.className = "highlight";

const span2 = document.createElement("span");
span2.textContent = "More!";
span2.className = "highlight";

// append allows multiple items (and text)
const codeAppend = document.createElement("code");
const newLine = document.createElement("br");

codeAppend.append("container.append(a,b,c,d) ln 138");
container.append(
     span1,
     span2,
     " ← This is a string added using append().",
     newLine,
     codeAppend
);

// --- appendChild() ---
const child = document.createElement("div");
const codeAppendChild = document.createElement("code");
child.textContent = "Added using appendChild() 'one parameter' ";
codeAppendChild.textContent = "container.appendChild(child); ln 151";
child.className = "highlight";
container.appendChild(child); // only allows 1 Node
container.appendChild(codeAppendChild);

// --- after() ---
const afterElement = document.createElement("div");
afterElement.textContent = "This was added using .after()";
afterElement.innerHTML +=
     ' <code>afterElement.textContent = "This was added using .after()" ;</code> ln 160';

afterElement.className = "highlight";
container.after(afterElement);

// --- insertAdjacentElement() ---
const insertTarget = document.getElementById("insertAdjacentDemo");

insertTarget.insertAdjacentElement("beforebegin", newLine);

insertTarget.insertAdjacentElement("beforebegin", createTag("beforebegin"));
insertTarget.insertAdjacentElement("afterbegin", createTag("afterbegin"));
insertTarget.insertAdjacentElement("beforeend", createTag("beforeend"));
insertTarget.insertAdjacentElement("afterend", createTag("afterend"));

// Utility to make elements with same style
function createTag(text) {
     const el = document.createElement("span");
     el.textContent = text;
     el.className = "highlight";
     return el;
}
