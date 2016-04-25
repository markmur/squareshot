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
    console.debug('Does this ever get called?');
    return this.captionsHidden();
  },

};
