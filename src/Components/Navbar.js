import React from 'react';
class Navbar extends React.Component {


    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        <img src="./brand.jpg" width="30" height="30" className="d-inline-block align-top" alt="" style={{marginRight: 12 + 'px'}} />
                        Pso BB Mag Timer
                    </a>
                </nav>

            </div>
        );
    }
}

export default Navbar;