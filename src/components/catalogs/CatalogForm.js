import React from 'react';
import { Field, reduxForm } from 'redux-form';


class CatalogForm extends React.Component {

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
                <Field name="title" component={this.renderInput} label="Enter the Title" />
                <Field name="author" component={this.renderInput} label="Enter the Author" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title) {
        errors.title = 'You must enter a Title';
    }
    if(!formValues.author) {
        errors.author = 'You must enter the name of the author';
    }

    return errors;
};


export default reduxForm({
    form: 'catalogForm',
    validate
})(CatalogForm);
