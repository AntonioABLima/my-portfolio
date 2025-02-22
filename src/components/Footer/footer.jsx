import './footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div>Developed + Designed by Antonio Lima</div>
                <div>Heavily inspired by Ed's Hinrichsen page</div>
                <div>COPYRIGHT © 2024-{new Date().getFullYear()} Antonio Lima</div>
            </div>
        </>
    );
};

export default Footer;