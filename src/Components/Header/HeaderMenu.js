import React from 'react';
import HeaderMenuItem from "./HeaderMenuItem";

function HeaderMenu(props) {
    return(
        <p align='right'>
        {props.MenuItems.map((el) => <HeaderMenuItem key={el} item={el} />)}
    </p>
    // <HeaderMenuItem MenuItems = {props.MenuItems}/>
    )
}

export default HeaderMenu;
