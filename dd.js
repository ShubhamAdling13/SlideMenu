document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const indicator = document.querySelector('.indicator');
  
    // Initialize the indicator position based on the active menu item
    const activeMenuItem = document.querySelector('.menu-item.active');
    indicator.style.transform = `translateX(${activeMenuItem.offsetLeft}px)`;
  
    menuItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Update the indicator position to the clicked menu item
        indicator.style.transform = `translateX(${this.offsetLeft}px)`;
  
        // Remove the 'active' class from all menu items
        menuItems.forEach(item => item.classList.remove('active'));
  
        // Add the 'active' class to the clicked menu item
        this.classList.add('active');
      });
    });
  });
  