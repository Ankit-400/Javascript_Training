import previewView from "./previewView.js";
import View from "./view.js";
import icon from 'url:../../img/icons.svg';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = " No recipes found for your query! Please try again :)"
  _message = '';

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(bookmark => previewView.render(bookmark, false)).join('');
  }
}

export default new ResultView();