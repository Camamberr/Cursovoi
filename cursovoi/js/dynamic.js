document.addEventListener("DOMContentLoaded", () => {
  // IntersectionObserver
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('exposition-card-body-animation');
      }
    });
  }

  let options = {
    threshold: [0.5]
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.exposition-card-body');

  for (let elm of elements) {
    observer.observe(elm);
  }

  // Форма
  const form = document.getElementById('myForm');
  const modal = document.getElementById('popup');

  if (form && modal) { 
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      modal.style.display = 'flex';

      setTimeout(() => {
        modal.style.display = 'none';
        form.submit();
      }, 6000);
    });

    modal.addEventListener('click', function() {
      modal.style.display = 'none'; 
      form.submit();
    });

    const link = document.getElementById('submit-button');
    const button = document.getElementById('submit-form');

    if (link && button) { 
      link.addEventListener('click', (event) => {
        event.preventDefault();
        button.click();
      });
    } else {
      console.error("submit-button или submit-form не найдены");
    }
  } else {
    console.error("myForm или popup не найдены");
  }

  // Бургер-меню
  const burgerMenu = document.querySelector(".burger-menu");
  const menuList = document.querySelector(".header-menu");
  const closeMenu = document.querySelector(".close-menu");

  if (burgerMenu && menuList && closeMenu) { 
    burgerMenu.addEventListener("click", () => {
      menuList.classList.toggle("show");
    });

    closeMenu.addEventListener("click", () => {
      menuList.classList.remove("show"); 
    });
  } else {
    console.error("burgerMenu, menuList или closeMenu не найдены");
  }
});
