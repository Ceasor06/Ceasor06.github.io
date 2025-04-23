// Check for a saved theme in localStorage
const savedTheme = localStorage.getItem('theme');

// Apply saved theme or default to light-theme
if (savedTheme) {
  document.body.classList.add(savedTheme);
} else {
  document.body.classList.add('light-theme');
}

// Select the theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');

// Set the initial icon based on the active theme
if (document.body.classList.contains('dark-theme')) {
  themeToggleBtn.textContent = "☀︎"; // dark-theme => show moon (to indicate switch to light)
} else {
  themeToggleBtn.textContent = "☾"; // light-theme => show sun (to indicate switch to dark)
}

// Listen for a click event to toggle themes
themeToggleBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme')) {
    // Switch to light theme
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
    themeToggleBtn.textContent = "☾"; // Use moon icon when switching to light
  } else {
    // Switch to dark theme
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
    themeToggleBtn.textContent = "☀︎"; // Use sun icon when switching to dark
  }
});

// Smooth scroll to Skills Section
function scrollToSkills() {
  const skillsSection = document.getElementById('skills-section');
  if (skillsSection) {
    skillsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// intercept the footer‐contact link so it never sticks the hash in the URL
const footerLink = document.querySelector('a[href="#footer-contact"]');
if (footerLink) {
  footerLink.addEventListener('click', e => {
    e.preventDefault();
    document
      .getElementById('footer-contact')
      .scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', window.location.pathname + window.location.search);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.work-item');
  let current = 0;
  setInterval(() => {
    items[current].classList.remove('active');
    current = (current + 1) % items.length;
    items[current].classList.add('active');
  }, 3000);
});


document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.work-experience-card .work-item');
  const dots  = document.querySelectorAll('.work-dots .dot');
  let current = 0;

  setInterval(() => {
    // hide current
    items[current].classList.remove('active');
    dots[current].classList.remove('active');

    // advance index
    current = (current + 1) % items.length;

    // show next
    items[current].classList.add('active');
    dots[current].classList.add('active');
  }, 3000);
});
// -- on DOM ready, sequence the load‑in fades --
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    // force a tiny timeout so CSS has parsed
    setTimeout(() => el.classList.add('animate'), 50);
  });
});

// -- on scroll, fade in any .scroll-fade-in when they hit the viewport --
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.38 });

document.querySelectorAll('.scroll-fade-in').forEach(el => {
  observer.observe(el);
});




// your existing constants
// const fullText   = "Hi! I'm Atharv 👋";
// const out        = document.getElementById("typing-header");
// let   pos        = 0;
// const charDelay  = 150;    // ms between each character
// const startDelay = 1000;   // ms before we kick off typing

// function typeChar() {
//   if (pos < fullText.length) {
//     out.textContent += fullText[pos++];
//     setTimeout(typeChar, charDelay);
//   }
// }

// window.addEventListener("DOMContentLoaded", () => {
//   setTimeout(typeChar, startDelay);
// });


document.addEventListener('DOMContentLoaded', () => {
  // …all your existing DOMContentLoaded logic…

  // Fun‑Fact card slideshow
  document.querySelectorAll('.new-card').forEach(card => {
    const images = card.querySelectorAll('.fun-image');
    let current = 0, timer;

    const showNext = () => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    };

    card.addEventListener('mouseenter', () => {
      // start cycling every 3s
      timer = setInterval(showNext, 1500);
    });

    card.addEventListener('mouseleave', () => {
      // stop & reset to first image
      clearInterval(timer);
      images.forEach((img, idx) =>
        img.classList.toggle('active', idx === 0)
      );
      current = 0;
    });
  });
});


const fullText = "I'm an AI and Machine Learning enthusiast specializing in deep learning, MLOps, and Python. I build innovative AI-driven applications and explore cutting-edge technologies like GenAI to create impactful solutions.";
const out      = document.getElementById("typing-desc");
let   pos      = 0;
const delay    = 50;   // ms between chars

// *first* reveal the <p> so its box is already laid out:
out.classList.add("visible");

// now type character‐by‐character
function typeNext() {
  if (pos < fullText.length) {
    out.textContent += fullText[pos++];
    setTimeout(typeNext, delay);
  } else {
    // once done, hide the cursor if you like:
    document.getElementById("typing-cursor").style.visibility = "hidden";
  }
}

// kick it off after a small pause
setTimeout(typeNext, 300);
