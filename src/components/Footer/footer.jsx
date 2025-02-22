import './footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div>Developed by Antonio Lima.</div>
                <div>This page is heavily inspired by Ed's Hinrichsen <a className='underline-link' href='https://edh.dev/' target='blank' rel='noopener noreferrer'>page</a>.</div>
                <div>COPYRIGHT © 2024-{new Date().getFullYear()} Antonio Lima.</div>
            </div>
        </>
    );
};

export default Footer;