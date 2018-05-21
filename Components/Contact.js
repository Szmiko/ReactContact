var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('div', {className: 'contact-Item'},
				React.createElement('img', {
					className: 'contact-Image',
					src: 'https://i.ytimg.com/vi/pVrDRLOeMKY/hqdefault.jpg',
					alt: 'Zdjęcie'
				}),
				React.createElement('p', {className: 'contact-Label'}, 'Imię: ' + this.props.item.firstName),
				React.createElement('p', {className: 'contact-Label'}, 'Nazwisko: ' + this.props.item.Name),
				React.createElement('a', {className: 'contact-Email'}, href: 'mailto: ' 'Imię: ' + this.props.item.email),
				this.props.item.email	
			)
		)
	};
});