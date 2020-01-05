export default function (sectionContent) {
  const { title, subtitle, body } = sectionContent
  return (
    <div class='section'>
      <h2>{ title }</h2>
      <h4>{ subtitle }</h4>
      <p>{ body }</p>
    </div>
  )
}
