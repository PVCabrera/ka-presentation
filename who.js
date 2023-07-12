"use strict"

const shanaText = `Meet Shana, a creative entrepreneur who started her own little furniture side business
during the Covid-19 pandemic. With a passion for upcycling and repurposing old furniture, Jane saw an
opportunity to turn her hobby into a small business that could help her stay afloat during uncertain times.

Using her garage as a workshop, Jane spent hours scouring thrift stores and garage sales for hidden
treasures that could be transformed into beautiful, one-of-a-kind pieces. She refurbished everything from
dressers and nightstands to coffee tables and chairs, and added her own unique touches with paint, fabric,
and hardware.`

const parisText = `Meet Paris, a supportive partner who helped kickstart their girlfriend's furniture
business. [Your name] played a crucial role in the success of the business by using their creative eye to
stage and edit photos of the furniture pieces, making them look even more beautiful and inviting.

In addition to the photography, Paris took charge of running the social media accounts for the
business, posting regular updates and engaging with potential customers. With Paris' help, the
business quickly gained traction and began attracting more and more customers.`

const kodyText = `Meet Kody, the mascot and the soul of the company. 

Being saved from a hawk the age of only 6 months, he was lucky to be found and so were we. We named the 
business after him, each photo and includes some piece of his character. His calm nature and determination
drives work we put in to honor him and expand his legacy as we continue to grow.`

// Variable Definitions

// Shana Functions

let shanaModal = document.getElementById("shanaModal")
let shanaModalTxt = document.getElementById("shana-text")
// Button location
let shanaButton = document.getElementById("shanaButton")

// Fucntion to open the modal
function openShanaModal(shanaText) {
  // Set the text content of the modal
  shanaModalTxt.textContent = shanaText

  // Show the modal and blur the background
  shanaModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Function to close the modal
function closeShanaModal() {
  // Hide the modal and restore the background
  shanaModal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Event Listener for button
shanaButton.addEventListener("click" , function() {
  shanaText
  openShanaModal(shanaText)
})


 // Add click event listener to close the modal when clicked outside
 shanaModal.addEventListener("click", function(event) {
   if (event.target === shanaModal) {
     closeShanaModal();
   }
 });

// Kody Functions

let kodyModal = document.getElementById("kodyModal")
let kodyModalTxt = document.getElementById("kody-text")
// Button location
let kodyButton = document.getElementById("kodyButton")

// Fucntion to open the modal
function openKodyModal(kodyText) {
  // Set the text content of the modal
  kodyModalTxt.textContent = kodyText

  // Show the modal and blur the background
  kodyModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Function to close the modal
function closeKodyModal() {
  // Hide the modal and restore the background
  kodyModal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Event Listener for button
kodyButton.addEventListener("click" , function() {
  kodyText
  openKodyModal(kodyText)
})


 // Add click event listener to close the modal when clicked outside
 kodyModal.addEventListener("click", function(event) {
   if (event.target === kodyModal) {
     closeKodyModal();
   }
 });
 

//  Paris Functions

let parisModal = document.getElementById("parisModal")
let parisModalTxt = document.getElementById("paris-text")
// Button location
let parisButton = document.getElementById("parisButton")

// Fucntion to open the modal
function openParisModal(parisText) {
  // Set the text content of the modal
  parisModalTxt.textContent = parisText

  // Show the modal and blur the background
  parisModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Function to close the modal
function closeParisModal() {
  // Hide the modal and restore the background
  parisModal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Event Listener for button
parisButton.addEventListener("click" , function() {
  parisText
  openParisModal(parisText)
})


 // Add click event listener to close the modal when clicked outside
 parisModal.addEventListener("click", function(event) {
   if (event.target === parisModal) {
     closeParisModal();
   }
 });

