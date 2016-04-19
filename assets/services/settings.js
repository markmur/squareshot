export default {

  captionsHidden() {
    return localStorage.getItem('captionsHidden') === 'true';
  },

  toggleCaptions() {
    console.log('Toggling Captions');
    var current = localStorage.getItem('captionsHidden') === 'true';
    localStorage.setItem('captionsHidden', !current);
  },

  onChange() {
    return this.captionsHidden();
  },

};
