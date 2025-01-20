const textArray = [
    "Hi, I'm Vikash Pal.",
    "Frontend Web Developer! ",
    "Let's Collaborate.",
  ];
  const typingSpeed = 100; // Milliseconds per character
  const erasingSpeed = 50; // Milliseconds per character
  const delayBetweenTexts = 2000; // Milliseconds before typing the next text
  
  let currentTextIndex = 0;
  let charIndex = 0;
  
  const typewriterElement = document.getElementById("typewriter");
  
  function type() {
    if (charIndex < textArray[currentTextIndex].length) {
      typewriterElement.textContent += textArray[currentTextIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenTexts);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      typewriterElement.textContent = textArray[currentTextIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      currentTextIndex = (currentTextIndex + 1) % textArray.length;
      setTimeout(type, typingSpeed);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenTexts);
  });
  