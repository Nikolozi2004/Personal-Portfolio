import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {
    Typography,
} from "@material-tailwind/react";

export const NavList = () => {

    const pages = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
    const { pathname } = useLocation();

    return (
        <ul className='className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
            {pages.map((page) => (
                <Typography
                    key={page}
                    as="li"
                    variant='small'
                    color='blue-gray'
                    className='p-1 font-medium'>
                    <NavLink
                        key={page}
                        to={`/Personal-Portfolio/${page}`}
                        className={({ isActive }) => (pathname === '/Personal-Portfolio/' && page === 'Home') || isActive ? '[text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-blue-500 flex items-center text-blue-500 transition-colors border-b-2 activenav' : 'nonactivenav flex items-center text-white hover:text-blue-500 hover:shadow-blue-500 transition-colors [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-white'}>
                        {page}
                    </NavLink>
                </Typography>
            ))}
        </ul>
    )
}
