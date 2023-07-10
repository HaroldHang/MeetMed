import MainLayout from "@/Layouts/MainLayout"
import { Link } from "@inertiajs/react"

export default function ServicesPage({ service }) {

    return (
        <>
            <MainLayout>
                <div className="container service-inst">
                    <div className="card-service"  style={{background : `url(/static/Images/ ${service.image_url.split('.')[0]}.webp)` } }>
                        {/* <img src={`/static/Images/` + service.image_url.split('.')[0] + `.webp`} className="card-img" alt="..."/> */}
                        <div className="card-img-overlay">
                            <h5 className="card-title">Card title</h5>

                        </div>
                    </div>
                    <div className="header">
                        <h2 className="section-title">{ service.nom }</h2>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam tempore animi porro temporibus facere sint nam autem quaerat molestiae illum odit repudiandae laboriosam veniam esse, ipsa doloremque tempora voluptates doloribus.
                        </p>
                    </div>
                    <div className="content">
                        <h4 className="h4">Nos services hospitalieres </h4>

                        <div className="row services-container py-2">
                        </div>
                    </div>
                </div>

            </MainLayout>
        </>
    )
}
