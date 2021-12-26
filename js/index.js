'use strict';

let CONTACTS = [{
    id: 1,
    name: 'Dan',
    phoneNumber: '+88005555213',
    photo: 'img/Den.jfif'
}, {
    id: 2,
    name: 'Oleg',
    phoneNumber: '+88005553535',
    photo: 'img/Oleg.jfif'
}, {
    id: 3,
    name: 'Alex',
    phoneNumber: '+89954654433',
    photo: 'img/Alex.jfif'
}, {
    id: 4,
    name: 'Ivan',
    phoneNumber: '+89099451399',
    photo: 'img/Ivan.jfif'

}];

let Contact = React.createClass({
    displayName: 'Contact',

    render: function render() {
        return React.createElement(
            'li',
            { className: 'contact' },
            React.createElement('img', { className: 'contact-image', src: this.props.photo, width: '60px', height: '60px' }),
            React.createElement(
                'div',
                { className: 'contact-info' },
                React.createElement(
                    'div',
                    { className: 'contact-name' },
                    ' ',
                    this.props.name,
                    ' '
                ),
                React.createElement(
                    'div',
                    { className: 'contact-number' },
                    ' ',
                    this.props.phoneNumber,
                    ' '
                )
            )
        );
    }
});

let ContactsList = React.createClass({
    displayName: 'ContactsList',

    getInitialState: function getInitialState() {
        return {
            displayedContacts: CONTACTS
        };
    },

    handleSearch: function handleSearch(event) {
        let searchQuery = event.target.value.toLowerCase();
        let displayedContacts = CONTACTS.filter(function (el) {
            let searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedContacts: displayedContacts
        });
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'contacts' },
            React.createElement('input', { type: 'text', placeholder: 'Поиск...', className: 'search-field', onChange: this.handleSearch }),
            React.createElement(
                'ul',
                { className: 'contacts-list' },
                this.state.displayedContacts.map(function (el) {
                    return React.createElement(Contact, {
                        key: el.id,
                        name: el.name,
                        phoneNumber: el.phoneNumber,
                        photo: el.photo
                    });
                })
            )
        );
    }
});

ReactDOM.render(React.createElement(ContactsList, null), document.getElementById("content"));
