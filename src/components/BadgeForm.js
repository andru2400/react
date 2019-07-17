import React from 'react'

class BadgeForm extends React.Component {

    state = {
        jobTitle: 'Desing'
    };

    // handleChange = (e) => {
    //     this.setState({
    //          [e.target.name]: e.target.value,
    //     });
    // }

    handleClick = (e) => {
        console.log("handleClick")
        console.log(this.state)
    }

    handleSubmit = (e) => {
        console.log("handleSubmit")
        console.log(this.state)
        e.preventDefault(); // No deja enviar el        
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" name="firstName" onChange={this.props.onChange} value={this.props.formValues.firstName}></input> 
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="lastName" onChange={this.props.onChange} value={this.props.formValues.lastName}></input> 
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" onChange={this.props.onChange} value={this.props.formValues.email}></input> 
                    </div>

                    <div className="form-group">
                        <label>Job Tittle</label>
                        <input type="text" className="form-control" name="jobTitle" onChange={this.props.onChange} value={this.props.formValues.jobTitle}></input> 
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input type="text" className="form-control" name="twitter" onChange={this.props.onChange} value={this.props.formValues.twitter}></input> 
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    {/* <button onClick={this.handleClick} className="btn btn-primary">Save</button> */}
                </form>
            </div>
        )
    }

}

export default BadgeForm