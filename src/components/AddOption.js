import React from 'react';

class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.optionAddFormSubmit = this.optionAddFormSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }

    optionAddFormSubmit(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.hasAddOption(option);

        this.setState({ error });

        if(!error) {
            e.target.elements.option.value = '';
        }
    };

    render() {
        return (
            <div className="addoption">
                {this.state.error && <p className="error-message">{this.state.error}</p>}
                <form onSubmit={this.optionAddFormSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className={this.state.error ? 'form-control addoption__input__error' : 'form-control addoption__input'}
                            name="option" 
                            placeholder="Enter Your Options" />
                    </div>
                    <button className="btn btn-type btn-lg btn-block">Add Option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;