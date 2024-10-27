import { Component } from "react";
import "./style.css";

export default class Basic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: true,       // Controls menu visibility
            selectedIndex: 0,        // Currently highlighted item
            isSubMenu: false,        // Tracks if we're in a submenu
            mainMenuIndex: 0         // Tracks selected main menu item when entering submenu
        };
    }

    // Define main menu and submenu items
    menuItems = [
        { name: "Music", subMenu: ["Song1", "Song2"] },
        { name: "Games", subMenu: ["Game1", "Game2"] },
        { name: "Settings", subMenu: ["General", "Display"] }
    ];

    // Toggle the main menu display
    displayMenu = () => {
        this.setState((prev) => ({
            displayMenu: !prev.displayMenu,
            selectedIndex: 0,
            isSubMenu: false,
            mainMenuIndex: 0
        }));
    };

    // Scroll through the menu items, cycling up or down
    scrollMenu = (direction) => {
        this.setState((prevState) => {
            const { isSubMenu, selectedIndex } = prevState;
            const menuLength = isSubMenu 
                ? this.menuItems[prevState.mainMenuIndex].subMenu.length 
                : this.menuItems.length;
            
            const newIndex =
                direction === "up"
                    ? (selectedIndex - 1 + menuLength) % menuLength
                    : (selectedIndex + 1) % menuLength;

            return { selectedIndex: newIndex };
        });
    };

    // Handle selection of the current item
    handleSelect = () => {
        const { isSubMenu, selectedIndex } = this.state;

        if (!isSubMenu) {
            // Enter the submenu of the selected item
            this.setState({ isSubMenu: true, mainMenuIndex: selectedIndex, selectedIndex: 0 });
        } else {
            // Back to the main menu if already in a submenu
            this.setState({ isSubMenu: false, selectedIndex: 0 });
        }
    };

    render() {
        const { displayMenu, selectedIndex, isSubMenu, mainMenuIndex } = this.state;
        const currentMenu = isSubMenu
            ? this.menuItems[mainMenuIndex].subMenu
            : this.menuItems;

        return (
            <div className="container">
                <div className="ipod">
                    <div className="card">
                        {/* Display menu only if displayMenu is true */}
                        {displayMenu && (
                            <div className="menu">
                                <ul>
                                    {currentMenu.map((item, index) => (
                                        <li key={index} className={index === selectedIndex ? "active" : ""}>
                                            {isSubMenu ? item : item.name}
                                            {!isSubMenu && index === selectedIndex && <span className="arrow">></span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="circular">
                        {/* Menu toggle button */}
                        <button onClick={this.displayMenu}>
                            <i className="fas fa-bars"></i>
                        </button>

                        {/* Scroll up button */}
                        <button onClick={() => this.scrollMenu("up")}>
                            <i className="fas fa-chevron-up"></i>
                        </button>

                        {/* Scroll down button */}
                        <button onClick={() => this.scrollMenu("down")}>
                            <i className="fas fa-chevron-down"></i>
                        </button>

                        {/* Select/Back button */}
                        <button onClick={this.handleSelect}>
                            <i className="fas fa-dot-circle"></i>
                        </button>

                        {/* Play/Pause button (for audio only) */}
                        <button>
                            <i className="fas fa-play"></i>/<i className="fas fa-pause"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
