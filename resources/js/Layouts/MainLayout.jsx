import AppNavBar from "@/Components/AppNavBar"
import AppSidebar from "@/Components/AppSidebar"
export default function MainLayout({children}) {

    return (
        <>
            <AppNavBar/>
            <div className="container mt-3">
                <div className="row">
                    <AppSidebar className="col-2"/>
                    <main className="col-10 main-content pl-2">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )

}
