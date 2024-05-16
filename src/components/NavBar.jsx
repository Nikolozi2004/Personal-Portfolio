import React from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavList } from './NavList';
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";



export const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);


    return (
        <Navbar className="mx-auto max-w-screen-2xl z-50 px-6 py-2 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            <div className="flex items-center justify-between">
                <Typography
                    as="a"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5"
                    color='white'
                >
                    Nikoloz Meskhi
                </Typography>
                <div className="hidden lg:block">
                    <NavList open={openNav} />
                </div>
                <IconButton
                    color='white'
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
};