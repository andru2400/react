import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg'
import Badge from '../components/Badge'

class BadgeNew extends React.Component{

    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={ header } alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Andres" LastName="David" jobTitle="T Backend" twitter="@AndresP"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew; 