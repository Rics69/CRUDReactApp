import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    changeIncreaseState = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    changeLikeState = (e) => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {name, salary} = this.props;
        const {increase, like} = this.state;
        let curClass = "list-group-item d-flex justify-content-between";

        if (increase){
            curClass += " increase";
        } 
        
        if (like){
            curClass += " like";
        }

        return (
            <li className={curClass}>
                <span className="list-group-item-label" onClick={this.changeLikeState}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.changeIncreaseState}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;