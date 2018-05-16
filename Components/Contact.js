var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('div', {className: 'contactItem'},
				React.createElement('img', {
					className: 'contactImage',
					src: 'https://i.ytimg.com/vi/pVrDRLOeMKY/hqdefault.jpg'
				}),
				React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
				React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.Name),
				React.createElement('a', {className: 'contactEmail'}, href: 'mailto: ' 'Imię: ' + this.props.item.email),
				this.props.item.email	
			)
		)
	};
});