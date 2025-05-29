import './Loader.css';

function Loader({ progress }) {
    return (
        <div className="loader-container">
            <div className='wrapper'>
                <div className='text-wapper'>
                    <p className="title-text">Antonio Lima</p>
                </div>
                <div className="loader">
                    <div className="loader-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <div className='text-wapper'>
                    <p className="loader-text">Carregando...</p>
                    <p className="loader-text">{progress.toFixed(0)}%</p>
                </div>

            </div>
        </div>
    );
}

export default Loader;
