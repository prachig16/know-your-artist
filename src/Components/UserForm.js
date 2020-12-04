import { Component } from 'react';
import '../Styles/UserForm.css';


class UserForm extends Component {
   
    render() { 
        return (
           <form action="">
                <label htmlFor="newChoice" className="srOnly">Type the name</label>
                <input type="text" id="newChoice" placeholder="Artist name.." required onChange={this.props.getInput} />
                <div className="selectionButton">
                    <button onClick={this.props.getSubmit}>Search</button>
                    <a href="./app.js"><i className="fas fa-redo"></i></a>
                </div>
           </form>
        )
    }
}
export default UserForm;