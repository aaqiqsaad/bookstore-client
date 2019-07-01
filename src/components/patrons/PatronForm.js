import React from 'react';
import { Field, reduxForm } from 'redux-form';


class PatronForm extends React.Component {

    renderError({error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render () {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="PatronID" component={this.renderInput} label="Enter the Patron ID" />
                <Field name="FirstName" component={this.renderInput} label="Enter the First Name" />
                <Field name="LastName" component={this.renderInput} label="Enter the Last Name" />
                <Field name="Status" component={this.renderInput} label="Enter the Status (Student, Employee, etc.)" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.PatronID) {
        errors.PatronID = 'You must enter the Patron ID';
    }
    if(!formValues.FirstName) {
        errors.FirstName = 'You must enter the patron\'s first name';
    }
    if(!formValues.LastName) {
        errors.LastName = 'You must enter the patron\' last name';
    }
    if(!formValues.Status) {
        errors.Status = 'You must enter the patron\' status';
    }

    return errors;
};


export default reduxForm({
    form: 'patronForm',
    validate
})(PatronForm);
