import MainLayout from "@/Layouts/MainLayout"
import { Link } from "@inertiajs/react"

export default function PatientServices({ services }) {

    function splitWords (input, count = 30) {
        return input.split(" ").slice(0, ++count).join(" ")
    }

    const allServices = services.map((service) => {
        return (
            <div className="col-lg-4 col-md-4 col-sm-6 mb-4 service-inst" key={service.nom }>
                <div className="card match-height">
                    <div className="card-body ">
                        { /* <img src="public/image/<?= $service['url_image'] ?>" className="img-service"/> */ }
                        <div className="serv-head d-flex">
                            <h3 className="card-title h4">{service.nom}</h3>
                            <img src="/static/Images/cardiology.png"/>
                        </div>
                        <p className="card-text">{ splitWords(service.description) }</p>
                        <Link href={`/services/` + service.nom } className="btn btn-primary mt-2">Consulter</Link>
                    </div>
                </div>
            </div>
        )
    })
    console.log(services)
    return (
        <>
            <MainLayout>
                <div className="container service-ctn">
                    <div className="header">
                        <h2 className="section-title">Services</h2>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam tempore animi porro temporibus facere sint nam autem quaerat molestiae illum odit repudiandae laboriosam veniam esse, ipsa doloremque tempora voluptates doloribus.
                        </p>
                    </div>
                    <div className="content">
                        <h4 className="h4">Nos services hospitalieres </h4>

                        <div className="row services-container py-2">
                            { allServices }
                        </div>
                    </div>
                </div>

            </MainLayout>
        </>
    )

}

