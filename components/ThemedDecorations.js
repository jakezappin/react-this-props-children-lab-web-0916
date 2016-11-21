const React = require('react');

class ThemedDecorations extends React.Component {
  render() {
    const childWithProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme,
      });
    });

    return (
      <div>
        {childWithProp}
      </div>
    );
  }
}

module.exports = ThemedDecorations;
