import Logo from '../img/logo192.png'

function Dialog({ toggleDialog }) {
    return (
        <>
            <div className='grid'>
                <img src={Logo} alt="logo.png" />
                <a onClick={toggleDialog} href='#'>Close Dialog</a>
            </div>
            <button onClick={toggleDialog}>Open Dialog</button>
        </>
    );
}

export default Dialog;