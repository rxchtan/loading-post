import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.changeButton = this.changeButton.bind(this);
    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    changeButton() {
        this.setState({ displayMenu: false }, () => {

        })
    }

    render() {
        return (
            <div className="dropdown" style={{ width: "200px" }} >
                <div className="button" onClick={this.showDropdownMenu}> Choose Category </div>
                {this.state.displayMenu ? (
                    <ul className="drop">
                        <li onClick={this.changeButton}><a className="active" href="#Create Page">Food</a></li>
                        <li><a href="#Manage Pages">Culture</a></li>
                        <li><a href="#Create Ads">Accomodation</a></li>
                        <li><a href="#Manage Ads">Places to Visit</a></li>
                        <li><a href="#Activity Logs">Studying</a></li>
                        <li><a href="#Setting">Setting</a></li>
                    </ul>
                ) :
                    (
                        null
                    )
                }

            </div>

        );
    }
}

export default Dropdown;