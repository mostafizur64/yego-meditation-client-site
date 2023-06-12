import { ReactSVG } from 'react-svg';
import Sun from './Sun.svg';
import Moon from './Moon.svg';

import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark');
    };

    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light');
    };

    const toggleTheme = () => {
        const selectedTheme = localStorage.getItem('selectedTheme');

        if (selectedTheme === 'dark') {
            setLightMode();
        } else {
            setDarkMode();
        }
    };

    const selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme === 'dark') {
        setDarkMode();
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                checked={selectedTheme === 'dark'}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <ReactSVG src={Sun} />
                <ReactSVG src={Moon} />
            </label>
        </div>
    );
};

export default DarkMode;
