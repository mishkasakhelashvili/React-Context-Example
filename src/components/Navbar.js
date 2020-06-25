import React, { Component } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/authContext';

export default class Navbar extends Component {
    render() {
        
        return (
            <AuthContext.Consumer>{(AuthContext) => (
                <ThemeContext.Consumer>{ (ThemeContext) => {
                    const { isAuthenticated, toggleAuth } = AuthContext; 
                    const { isLightTheme, light, dark } = ThemeContext; 
                    const theme = isLightTheme ? light : dark;
                    return (
                        <nav style={{ background: theme.bg, color: theme.syntax }}>
                        <h1>Context app</h1>
                        <div onClick={toggleAuth}>
                            { isAuthenticated ? 'Log In' : 'Log Out' }
                        </div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        </nav>
                    )
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        );
    }
}
