// 1. Change the main headline text in the hero section.
(function() {
    document.querySelector('#hero h1').textContent = "Supercharge Your Brand with Stellar Marketing";
})();

// 2. Change the line of text below the hero headline.
(function() {
    document.querySelector('#hero p').innerHTML = "Leverage innovative strategies from Stellar Marketing to make your business <em><strong>shine</strong></em> and <em><strong>succeed</strong></em>.";
})();



// 3. Change the background image in the hero section.
(function() {
    document.querySelector('#hero').style.backgroundImage = 'url(https://picsum.photos/id/683/1280/720)';
})();

// 4. Change the background color of the nav bar to match the footer's color.
(function() {
    const footerBgColor = getComputedStyle(document.querySelector('footer')).backgroundColor;
    document.querySelector('header').style.backgroundColor = footerBgColor;
})();

// 5. Remove the "Get Started" CTA from the hero section.
(function() {
    const ctaButton = document.querySelector('#hero a');
    if (ctaButton) ctaButton.remove();
})();

// 6. Add a full width section directly below the hero.
(function() {
    const heroSection = document.querySelector('#hero');
    heroSection.style.marginBottom = '0'; // Remove bottom margin of hero section

    const newSection = document.createElement('section');
    newSection.style.backgroundColor = '#6495ed';
    newSection.style.padding = '32px 0';
    newSection.style.width = '100%';
    newSection.style.display = 'flex';
    newSection.style.justifyContent = 'center';
    newSection.style.marginBottom = '3rem'; // Maintain spacing only below the new section

    const newButton = document.createElement('button');
    newButton.textContent = 'Schedule a Consultation Today';
    newButton.style.backgroundColor = '#fff';
    newButton.style.color = '#1d4ed8'; // Matches bg-blue-600 color
    newButton.style.border = '4px solid #1d4ed8';
    newButton.style.padding = '10px 20px';
    newButton.style.fontSize = '16px';
    newButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; // Minor drop shadow
    newButton.style.cursor = 'pointer';

    newButton.addEventListener('click', function() {
        alert('Thank You for your interest in Stellar Marketing!');
    });

    newSection.appendChild(newButton);

    // Insert the new section directly after the hero section
    heroSection.parentNode.insertBefore(newSection, heroSection.nextSibling);
})();



// 7. Change the icons color in the services section to #6495ed.
(function() {
    const icons = document.querySelectorAll('.material-symbols-outlined');
    icons.forEach(icon => {
        icon.style.color = '#6495ed';
    });
})();

// 8. Change the Digital Marketing icon to 'Ads Click'.
(function() {
    const digitalMarketingIcon = document.querySelector('[data-icon="digital"]');
    if (digitalMarketingIcon) {
        digitalMarketingIcon.textContent = 'ads_click';
    }
})();

// 9. Change the layout of tiles in the Specialized Marketing Solutions section to 4 across at >=1024px.
(function() {
    const productCardsSection = document.querySelector('[data-section="product_cards"]');
    if (window.innerWidth >= 1024) {
        productCardsSection.classList.remove('md:grid-cols-2');
        productCardsSection.classList.add('md:grid-cols-4');
    }
})();

// 10. Change the Musicians image in the Specialized Marketing Solutions section.
(function() {
    const musiciansImage = document.querySelector('img[alt="Musicians"]');
    if (musiciansImage) {
        musiciansImage.src = 'https://picsum.photos/id/453/400/300';
    }
})();

// Graduate Requirements: Prevent the form from submitting to a broken URL and handle form validation.
(function() {
    const form = document.querySelector('#contact form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const message = document.querySelector('#message');

        if (name.value && email.value) {
            alert(`Thank you, ${name.value}! We will be in touch with you shortly at ${email.value}.`);
            name.value = '';      // Clear name field
            email.value = '';     // Clear email field
            message.value = '';   // Clear message field
        } else {
            alert('Please provide a name and email.');
        }
    });
})();
