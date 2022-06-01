console.log("hello");
// Section Gallery - Dropdown choices
const defaultSelect = () => {
    const elementGallery = document.querySelector('#gallery__select');
    const choiceGallery = new Choices(elementGallery, {
      searchEnabled: false,
      position: 'bottom'
    });
  }
defaultSelect();