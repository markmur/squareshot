const captionsHidden = () =>
  localStorage.getItem('captionsHidden') === 'true';

const toggleCaptions = () => {
  console.log('TOGGLING CAPTIONS');
  localStorage.setItem('captionsHidden', !captionsHidden());
};

let initialState = {
  captionsHidden: captionsHidden(),
};

export default function Settings(state = initialState, action) {
  switch (action.type) {
    case 'CAPTIONS_HIDDEN':
      return Object.assign({}, state, {
        captionsHidden: captionsHidden(),
      });
    case 'TOGGLE_CAPTIONS':
      toggleCaptions();
      return Object.assign({}, state, {
        captionsHidden: captionsHidden(),
      });
    default:
      return state;
  }
}
