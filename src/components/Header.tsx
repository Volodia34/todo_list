import React from 'react';
import TodoButton from "../shared/components/buttons/Button";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";

const Header = () => {
    return (
        // <Box sx={{ flexGrow: 1 }}>
        //     <AppBar position="static">
        //         <Toolbar>
        //
        //             <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
        //                 News
        //             </Typography>
        //
        //             <Button color="inherit">Login</Button>
        //             <Button color="inherit">Sign up</Button>
        //         </Toolbar>
        //     </AppBar>
        // </Box>
        <header>
            <p>To do app</p>
            <div className='header__button'>
                <TodoButton click={() => ''}>Log in</TodoButton>
                <TodoButton click={() => ''}>sign up</TodoButton>
            </div>
        </header>
    );
};

export default Header;