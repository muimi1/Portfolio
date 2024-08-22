document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Hello there",        
        " How are you?",      
        " Welcome to my page!",     
        " I am Isaac Muimi , A Web developer" ,          
        " Let's create!"     
    ];
    let textIndex = 0;
    let charIndex = 0;
    const speed = 130; // milliseconds for typewriter effect
    const delayBetweenTexts = 1000; // Delay before the next text starts (in milliseconds)
    const typewriterElement = document.getElementById("typewriter");
    const zoomOverlay = document.getElementById("zoom-overlay");

    // Trigger audio playback on user interaction
    document.body.addEventListener('click', () => {
        if (typewriterSound && typewriterSound.paused) {
            typewriterSound.play();
        }
    });

    function typeWriter() {
        if (textIndex < texts.length) {
            const currentText = texts[textIndex];
            
            // Handle different animations based on text index
            if (textIndex === 1) {
                // Slide-in from the left for the 2nd text
                typewriterElement.textContent = currentText;
                typewriterElement.classList.add('slide-in-left');

                setTimeout(() => {
                    typewriterElement.classList.remove('slide-in-left');
                    textIndex++;
                    setTimeout(typeWriter, delayBetweenTexts);
                }, 1500);
                
            } else if (textIndex === 2) {
                // Fade-in effect for the 3rd text
                typewriterElement.textContent = currentText;
                typewriterElement.classList.add('fade-in');

                setTimeout(() => {
                    typewriterElement.classList.remove('fade-in');
                    textIndex++;
                    setTimeout(typeWriter, delayBetweenTexts);
                }, 1500);
                
            } else if (textIndex === 3) {
                // Slide-in from the right and disappear for the 4th text
                typewriterElement.textContent = currentText;
                typewriterElement.classList.add('slide-in-right');

                setTimeout(() => {
                    typewriterElement.classList.remove('slide-in-right');
                    setTimeout(() => {
                        typewriterElement.textContent = ''; // Clear the text after animation
                        textIndex++;
                        setTimeout(typeWriter, delayBetweenTexts);
                    }, 1000); // Adjust delay for smooth transition
                }, 1500);
                
            } else if (charIndex < currentText.length) {
                // Typewriter effect for 1st and 5th texts
                typewriterElement.textContent += currentText.charAt(charIndex);
                charIndex++;

                setTimeout(typeWriter, speed);
            } else {
                // Move to the next text after a delay
                textIndex++;
                charIndex = 0;
                setTimeout(() => {
                    typewriterElement.textContent = ''; // Clear the text before typing the next one
                    typeWriter();
                }, delayBetweenTexts);
            }
        } else {
            
            zoomOverlay.classList.add('zoom-in');
            setTimeout(() => {
                window.location.href = "welcome.html"; // Redirects to the welcome page
            }, 3000);
        }
    }

    typeWriter();
});
