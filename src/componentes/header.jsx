import BtCarrito from "./botoncarrito"

function Header() {
    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">

                    <div className="col-8 col-md-3">
                        <img
                            className="img-fluid"
                            src="/img/logo.svg"
                            alt="logo"
                        />
                    </div>

                    <BtCarrito/>

                    <nav className="col-md-6 mt-5 d-flex align-items-start justify-content-end">

                        
                    </nav>

                </div>
            </div>
        </header>
    )
}

export default Header

