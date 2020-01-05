import Section from './Section.js'
import sectionContent from './sectionContent.js'

const domContainer = document.querySelector('#sections');
const App = () => {
  return (
    <div>
      <h1>Year in Review</h1>
      { sectionContent.map(content => <Section key={content.date} {...content} />) }
    </div>
  )
}
ReactDOM.render(<App />, domContainer);
