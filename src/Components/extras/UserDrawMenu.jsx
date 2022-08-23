import { MenuDivider, MenuGroup, MenuItem } from '@chakra-ui/react';
import React from 'react';

const menuGrpList = [
    ['Your Account', 'Signout'],
    ['Settings'],
    ['Help', 'Send Feedback']
];

const UserDrawMenu = () => {
    return (
        <div>
            {menuGrpList.map((menuGrp, index) => (
                <div key={index}>
                    {menuGrp.map((menuItem, indexT) => (
                        <MenuGroup key={indexT}>
                            <MenuItem>{menuItem}</MenuItem>
                        </MenuGroup>
                    ))}
                    {index !== menuGrpList.length - 1 && <MenuDivider />}
                </div>
            ))}
        </div>
    );
};

export default UserDrawMenu;