import { Link } from "@inertiajs/react"

export default function AppSidebar({className}) {
    return (
        <>
            <div className={`side-nav ` + className }>
                <ul className="sidenav">
                    <li title="Basic Startup" className="sidelist">
                        <a href="examens">Tableau de bord <i className="ti-home"></i></a>
                    </li>
                    <li title="Basic Startup" className="sidelist">
                        <Link href="/services">Services</Link>
                        <ul>

                            <li className="sidelist">
                            <a href="services>"></a>
                            </li>

                        </ul>
                    </li>
                    <li title="Basic Startup" className="sidelist">
                        <a href="examens">Mes examens</a>
                    </li>
                    <li className="sidelist">
                        <a href="deconnexion">Deconnexion</a>
                        <ul>
                            <li className="sidelist">
                                <a href="single.html">Linux</a>
                            </li>
                            <li className="sidelist">
                                <a href="single.html">Mac OS</a>
                            </li>
                            <li className="sidelist">
                                <a href="single.html">Routing</a>
                            </li>
                            <li className="sidelist">
                                <a href="single.html">Ubuntu</a>
                            </li>
                            <li className="sidelist">
                                <a href="single.html">Windows</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}
