import React from 'react';
import Nev from '../Nev/Nev';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout(){
    return <>
        <Nev/>
        <div className=' container'>
            <div className="row">
                <div className="col-md-12">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
        <Footer/>
    </>
}
