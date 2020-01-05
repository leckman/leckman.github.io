export default function (sectionContent) {
  var title = sectionContent.title,
      subtitle = sectionContent.subtitle,
      body = sectionContent.body;

  return React.createElement(
    'div',
    { 'class': 'section' },
    React.createElement(
      'h2',
      null,
      title
    ),
    React.createElement(
      'h4',
      null,
      subtitle
    ),
    React.createElement(
      'p',
      null,
      body
    )
  );
}