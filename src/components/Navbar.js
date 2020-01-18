import React from 'react'
import { Menu, Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <Menu inverted>
            <Container>
                <Link to='/'>
                    <Menu.Item style={{color: "#FFDD00"}} name="Star Wars Tunaiku App"/>
                </Link>
                <Link to='/movies'>
                    <Menu.Item style={{color: "#FFDD00"}} name="Movies"/>
                </Link>
                <Link to='/planets'>
                    <Menu.Item style={{color: "#FFDD00"}} name="Planets"/>
                </Link>
            </Container>
        </Menu>
    );
}
