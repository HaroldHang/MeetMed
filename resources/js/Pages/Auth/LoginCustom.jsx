
import AuthHeader from "@/Components/AuthHeader"
import CustomButton from "@/Components/CustomButton"
import TextInput from "@/Components/TextInput"
import InputError from '@/Components/InputError';
import InputLabel from "@/Components/InputLabel"
import { useForm } from "@inertiajs/react"
export default function Login(){

    const {setData, post, errors } = useForm({
        identifier : '',
        password : ''
    })

    const handleChange = (dataName, value) => {
        console.log(dataName, value)
        setData(dataName, value)
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div>
            <AuthHeader/>
            <main>
                <div className="sup-ctn">
                    <div className="welcome">
                        <h2>Bon retour sur MeetMed</h2>
                        <p>Sur MeetMed, la perte de temps est reduite</p>
                        </div>
                        <div className="banner-inscription banner-connexion">
                        <section className="section">
                            <div className="container">
                                <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="p-5 shadow rounded content">
                                    <h2 className="section-title">Connectez-vous</h2>
                                    <form id="form-app" onSubmit={submit}>

                                        <div className="badge security">
                                        </div>
                                        {/* <div className="user-select">
                                            <h4  className="user-active" id="patient-connect">Patient</h4>
                                            <h4 className="" id="medecin-connect">Medecin</h4>
                                        </div> */}
                                        <div id="patient-form">
                                            <div className="form-group">
                                                <InputLabel value="Identifiant"/>

                                                <TextInput
                                                    id="identifiant"
                                                    type="text"
                                                    name="identifiant" placeholder="Votre Identifiant"
                                                    className="form-control"
                                                    onChange={(e)=> handleChange("identifier", e.target.value)}
                                                />
                                                <InputError message={errors.identifier} className="mt-2" />

                                            </div>
                                            <div className="form-group">
                                                <InputLabel value="Mot de passe"/>

                                                <TextInput
                                                    id="passwordInput"
                                                    type="password"
                                                    name="password" placeholder="Mot de passe"
                                                    className="form-control"
                                                    onChange={(e)=> handleChange("password", e.target.value)}
                                                />
                                                <InputError message={errors.password} className="mt-2" />
                                            </div>
                                            {/* <div className="form-group">
                                                <label >Prenom</label>
                                                <input type="text" className="form-control" id="Prenom" name="prenom" placeholder="Votre Prenom"/>
                                            </div> */}
                                        </div>
                                        {/* <div id="medecin-form">
                                            <div className="form-group">
                                            <label >Service</label> <br/>
                                            <select name="id_spec">

                                                    <option value=""></option>

                                            </select>
                                            </div>
                                            <div className="form-group">
                                            <label >Email</label>
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Votre Email"/>
                                            </div>
                                            <div className="form-group">
                                            <label >Mot de passe</label>
                                            <input type="password" className="form-control" id="mdp" name="motdepasse" placeholder="********"/>
                                            </div>
                                        </div> */}
                                        <CustomButton className="btn-primary" type="submit">
                                            Connecter
                                        </CustomButton>

                                    </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </section>

                    </div>

                </div>
            </main>
        </div>

    )
}
