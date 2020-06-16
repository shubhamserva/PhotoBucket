import React from 'react';

class SearchBar extends React.Component{

    // OnInputChange(event){
    //     console.log(event.target.value);
    // }
    // OnInputClick(){
    //     console.log("event");
    // }
    onFormSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    state = {term:''}

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={event=>this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                    <input type="text" 
                    onChange={(e)=> this.setState({ term:e.target.value})} 
                    onClick={this.OnInputClick}
                    value ={ this.state.term}  ></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;