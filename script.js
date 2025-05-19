// Typing Effect
const phrases = ["Aspiring Software developer" ,

"MCA Student with Big Dreams" ,

"Building Projects with Love" ,

"Learning Something New Every Day" 

];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

(function typeEffect() {
  const typingText = document.getElementById("typingText");
  typingText.innerHTML = currentPhrase.join("");

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j++]);
  } else if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) isDeleting = true;
  if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 120);
})();

// Dark Mode Toggle
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
