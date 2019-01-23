import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss';

import Header from '../components/Header';
import Options from '../components/Options';
import AddOption from '../components/AddOption';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [],
            selectedOption: undefined,
            viewModal: ''
        }

        this.removeAllOptionsHandler = this.removeAllOptionsHandler.bind(this);
        this.removeSingleOptionHandler = this.removeSingleOptionHandler.bind(this);
        this.optionAddFormSubmit = this.optionAddFormSubmit.bind(this);
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() =>({ options }))
            }
        } catch (e) {
            //nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {

    }

    removeAllOptionsHandler() {
        this.setState({ options: [] });
    }

    removeSingleOptionHandler(optionIndex) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionIndex !== option)
        }));
    }

    optionAddFormSubmit(option) {
       if(!option) {
           return 'Enter Valid Option item';
       } else if(this.state.options.indexOf(option) > -1 ) {
        return 'This Option already exists';
       }

       this.setState((prevState) => ({
           options: prevState.options.concat(option)
       }));
    }

    render() {
        const appTitle = 'Simple React App';
        const subTitle = 'Creating my first react app';
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="app">
                            <Header 
                                title={appTitle}
                                subtitle={subTitle} 
                            />
                    
                            <Options
                                length={this.state.options.length} 
                                listOptions={this.state.options}
                                removeAll={this.removeAllOptionsHandler}
                                removeOption={this.removeSingleOptionHandler} />
                                
                            <AddOption 
                                hasAddOption={this.optionAddFormSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;