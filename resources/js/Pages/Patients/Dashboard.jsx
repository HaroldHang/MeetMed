import MainLayout from "@/Layouts/MainLayout"

export default function PatientDashboard({ patient }) {
    return (
        <>
            <MainLayout>
                <div>
                    Welcome {patient.firstname} {patient.lastname}
                </div>

            </MainLayout>
        </>
    )

}

