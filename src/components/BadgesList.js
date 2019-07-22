import React from 'react';
import './styles/BadgeList.css'
import { Link } from 'react-router-dom';

class BadgesList extends React.Component {

    render(){
        return(
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => { 
                    return(
                        if(this.props.badges.length == 0){
                            return(
                                <div>
                                <h3>No encontramos ningún badge</h3>
                                <Link className="btn btn-primary" to="/badges/new">
                                    a
                                </Link>
                                </div>
                            )   
                        }
                        <li key={badge.id} className='Badge__section-name-list'>
                            <img src={badge.avatarUrl} className='Badge__avatar-list'/>
                            <div>
                                {badge.firstName} {badge.lastName}
                                <br />
                                {badge.jobTitle}
                                <br />
                                <span className='twitter__blue_font'>{badge.twitter}</span>
                            </div>                            
                        </li> 
                    )    
                })}
            </ul>
        )
    }

}

export default BadgesList;