import React, { Component } from 'react';
import logo from '../Assets/images/HERO.svg'

class Index extends Component{
    render(){
        return(
        <React.StrictMode>
            <section className='Index'>
                <div className='Index_logo'>
                    <img src={logo} alt=""/>
                </div>
                <form className='index_login'>
                    <input type="number" placeholder='Introduzca ID de Dota2' />
                    <button>Ingresar</button>
                </form>
            </section>
        </React.StrictMode>)
    }
}

export default Index;