// Authentication Header
export default function AuthHeader() {

    return (
        <header className="sticky-top navigation">
            <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent navbar-ly">
                    <a className="navbar-brand med-brand" id="med" href="acceuil"><span className="">Meet</span><span>Med</span></a>
                    {/* <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navigation">
                        <i className="ti-align-right h4 text-dark"></i>
                    </button> */}

                    <div className="text-center btn-ctn" id="navigation">
                        <a href="login" className="btn btn-sm btn-outline-primary ml-lg-4">Se connecter</a>
                        <a href="register" className="btn btn-sm btn-outline-primary ml-lg-4">S'inscrire</a>

                    </div>
                </nav>
            </div>
        </header>
    )
}
