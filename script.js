// MOBILE MENU TOGGLE
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// STICKY HEADER ON SCROLL
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// PROJECT FILTER SYSTEM
function filterProjects(category) {
  // Remove active class from all filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => btn.classList.remove("active"));
  
  // Add active class to clicked button
  const clickedBtn = document.querySelector(`[onclick="filterProjects('${category}')"]`);
  if (clickedBtn) clickedBtn.classList.add("active");
  
  // Filter cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => {
    const cardCategory = card.getAttribute("data-category");
    
    // Add transition styling dynamically
    card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    
    if (category === "all" || cardCategory === category) {
      card.style.display = "flex";
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      }, 50);
    } else {
      card.style.opacity = "0";
      card.style.transform = "scale(0.95)";
      setTimeout(() => {
        card.style.display = "none";
      }, 400);
    }
  });
}
