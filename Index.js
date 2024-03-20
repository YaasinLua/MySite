document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const containers = document.querySelectorAll('.container');
    const span = document.querySelector('nav span');
  
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        // Get the name of the clicked link
        const sectionName = link.dataset.section;
  
        // Remove the active class from all navigation links
        links.forEach((prevActiveLink) => {
          prevActiveLink.classList.remove('active');
        });
  
        // Set the left and width of the span element based on the section name
        if (sectionName === 'home') {
          span.style.left = '0px';
          span.style.width = '95px';
        } else if (sectionName === 'about') {
          span.style.left = '95px';
          span.style.width = '110px';
        } else if (sectionName === 'portfolio') {
          span.style.left = '205px';
          span.style.width = '110px';
        } else if (sectionName === 'resume') {
          span.style.left = '318px';
          span.style.width = '95px';
        } else if (sectionName === 'project') {
          span.style.left = '413px';
          span.style.width = '110px';
        }
  
        // Add the active class to the clicked link
        link.classList.add('active');
  
        // Remove the 'hide' class from all containers and then hide them
        containers.forEach((container) => {
          container.classList.remove('hide');
  
          setTimeout(() => {
            if (container.id !== `${sectionName}-container`) {
              container.classList.add('hide');
            }
          }, 10);
        });
  
        // Ensure the correct container is shown initially, without delay
        const targetContainer = document.getElementById(`${sectionName}-container`);
        if (targetContainer.classList.contains('hide')) {
          targetContainer.classList.remove('hide');
        }
  
        setTimeout(() => {
          targetContainer.classList.add('show');
        });
      });
    });
  });