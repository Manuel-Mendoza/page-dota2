import React, { Component } from 'react';
import logo from '../Assets/images/HERO.svg'
import {Link} from 'react-router-dom';

class Index extends Component{

    state={
        id:''
    }

    numero = ({value}) => {

        if (value.length === 9){
            this.setState(() =>{
                return{id:value}
            })
        }

    }

    render(){
        return(
        <React.StrictMode>
            <section className='Index'>
                <div className='Index_logo'>
                    <img src={logo} alt=""/>
                </div>
                <div className='index_login'>
                    <input type="number"
                        placeholder='Introduzca ID de Dota2' 
                        onChange={event => this.numero(event.target)} 
                    />
                    <button>
                        <Link to='/profile/'>
                            Ingresar
                        </Link>
                    </button>
                </div>
            </section>
        </React.StrictMode>)
    }
}

export default Index;