

export default function MyAuthenticated({children}){
    return (
        <div className="auth-layout">
            <header class="sticky-top navigation">
                <div className="container">
                        <nav class="navbar navbar-expand-lg navbar-light bg-transparent navbar-ly">
                        <a class="navbar-brand med-brand" id="med" href="acceuil"><span class="">Meet</span><span>Med</span></a>
                        <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navigation">
                            <i class="ti-align-right h4 text-dark"></i></button>
                        <div class="collapse navbar-collapse text-center btn-ctn" id="navigation">
                            <a href="connexion" class="btn btn-sm btn-outline-primary ml-lg-4">Se connecter</a>
                            <a href="./" class="btn btn-sm btn-outline-primary ml-lg-4">S'inscrire</a>

                        </div>
                    </nav>
                </div>
            </header>

            <main>
                {children}
            </main>

        </div>
    )
}
