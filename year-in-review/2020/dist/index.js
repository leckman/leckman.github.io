import Section from './Section.js';
import sectionContent from './sectionContent.js';

var domContainer = document.querySelector('#sections');
var App = function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Year in Review'
    ),
    sectionContent.map(function (content) {
      return React.createElement(Section, Object.assign({ key: content.date }, content));
    })
  );
};
ReactDOM.render(React.createElement(App, null), domContainer);