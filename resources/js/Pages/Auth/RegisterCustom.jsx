import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import CustomButton from '@/Components/CustomButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthHeader from '@/Components/AuthHeader';

export default function RegisterCustom() {
    const { data, setData, post, processing, errors, reset } = useForm({
        lastname: '',
        firstname: '',
        birthdate : null,
        address : '',
        phoneNumber : null,
        profession : '',
        civilState : '',
        gender : null,
        email: null,
        password: '',
        //password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleChange = (dataName, value) => {
        console.log(dataName, value)
        setData(dataName, value)
    }
    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    const registerSubmit = (e)=> {
        e.preventDefault();
        post(route('register'))
    }

    return (
        <div>
            <AuthHeader/>
            <main>
                <div className="sup-ctn">
                    <div className="welcome">
                    <h2>MeetMed vous souhaite la bienvenue</h2>
                    <p>Sur MeetMed, la perte de temps est reduite</p>
                    </div>
                    <div className="banner-inscription">
                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="p-5 shadow rounded content">
                                <h2 className="section-title">Inscrivez-vous</h2>
                                <form onSubmit={registerSubmit}>

                                    <div className="badge security">

                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <InputLabel value="Nom"/>
                                            <TextInput
                                                id="nom"
                                                type="text"
                                                name="nom" placeholder="Votre Nom"
                                                className="form-control"
                                                onChange={(e)=> handleChange('lastname',e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <InputLabel value="Prenom"/>
                                            <TextInput
                                                id="prenom"
                                                type="text"
                                                name="prenom" placeholder="Votre Prenom"
                                                className="form-control"
                                                onChange={(e)=> handleChange('firstname',e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <InputLabel value="Date"/>
                                            <TextInput
                                                id="date"
                                                type="date"
                                                name="date" placeholder="Date de naissance"
                                                className="form-control"
                                                onChange={(e)=> handleChange('birthdate',e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <InputLabel value="Adresse"/>
                                            <TextInput
                                                id="adresse"
                                                type="text"
                                                name="adresse" placeholder="Adresse (Quartier ou Ville)"
                                                className="form-control"
                                                onChange={(e)=> handleChange('address',e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <InputLabel value="Telephone"/>
                                            <TextInput
                                                id="numero"
                                                type="number"
                                                name="numero" placeholder="229 ........"
                                                className="form-control"
                                                onChange={(e)=> handleChange('phoneNumber',e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <InputLabel value="Profession"/>
                                            <TextInput
                                                id="profession"
                                                type="text"
                                                name="profession" placeholder="Profession"
                                                className="form-control"
                                                onChange={(e)=> handleChange('profession',e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <InputLabel value="Etat Civile"/>
                                            <TextInput
                                                id="civil"
                                                type="text"
                                                name="civil" placeholder="Célibataire, Marié, Divorcé"
                                                className="form-control"
                                                onChange={(e)=> handleChange('civilState',e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                        <InputLabel value="Sexe"/>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <span className="d-flex justify-content-between align-items-center">
                                                <span>Femme</span>
                                                <TextInput
                                                    id="femme"
                                                    type="radio"
                                                    name="sexe"
                                                    value = "F"
                                                    className="form-control ml-2"
                                                    onChange={(e)=> handleChange('gender',e.target.value)}
                                                />
                                            </span>
                                            <span className="d-flex justify-content-center align-items-center ml-2">
                                                <span> Homme </span>
                                                <TextInput
                                                    id="homme"
                                                    type="radio"
                                                    name="sexe"
                                                    value = "M"
                                                    className="form-control ml-2"
                                                    onChange={(e)=> handleChange('gender',e.target.value)}
                                                />
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <InputLabel value="Mot de passe"/>
                                            <TextInput
                                                id="password"
                                                type="password"
                                                name="password" placeholder="********"
                                                className="form-control"
                                                onChange={(e)=> handleChange('password',e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        {errors.firstname}
                                    </div>
                                    <CustomButton type="submit" className="btn btn-primary" name="submit">
                                    S'inscrire
                                    </CustomButton>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    <div>
                        {/* <img src="public/image/Doc.svg"/> */}
                    </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
