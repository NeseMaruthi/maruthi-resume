const words = ["Python", "Data Analysis", "ML Enthusiast"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 120;
  const deletingSpeed = 80;
  const delayBetweenWords = 1000;

  const typingElement = document.getElementById("typing");

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      typingElement.textContent = currentWord.slice(0, charIndex++);
      if (charIndex > currentWord.length) {
        setTimeout(() => (isDeleting = true), delayBetweenWords);
      }
    } else {
      typingElement.textContent = currentWord.slice(0, charIndex--);
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
  }

typeEffect();