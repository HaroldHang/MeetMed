import { Link } from '@inertiajs/react'

export default function AppNavBar() {

    return (
        <header className="sticky-top navigation">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent navbar-ly">
                    <Link className="navbar-brand med-brand" id="med" href="dashboard"><span className="">Meet</span><span>Med</span></Link>

                    <div className="text-center btn-ctn" id="navigation">
                        
                    </div>
                </nav>
            </div>
        </header>
    )
}
