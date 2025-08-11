/** @format */

const btn = document.querySelector("#zipCode");
const zip = document.querySelector("#zipInput");
const messageContainer = document.querySelector("#message");

btn.addEventListener("submit", function (e) {
     e.preventDefault();
     newMessage(3);

     parseInt(zip.value) === 10003 || 1100 || 3477 || 2300
          ? newMessage(1)
          : newMessage(0);
});

function newMessage(a) {
     const h2 = document.createElement("h2");
     const p = document.createElement("p");

     if (a === 3) {
          messageContainer.innerHTML = "";
     } else {
          if (a === 0) {
               h2.innerHTML = "We don't deliver here";
               p.innerHTML = "We only deliver to 1100,2300,3477 and 10003";
          } else {
               h2.innerHTML = "We deliver here";
               p.innerHTML = "Fast delivery and Free Shipping";
          }
          messageContainer.append(h2, p);
          zip.value = null;
     }
}
