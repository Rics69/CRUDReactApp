import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employess-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Danil K.', salary: '1000', increase: true, rise: true, id: 1},
                {name: 'Yarik K.', salary: '300', increase: false, rise: false, id: 2},
                {name: 'Artur H.', salary: '900', increase: true, rise: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }

        this.currentId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    onAdd = (name, salary) => {
        const newEmp = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.currentId++
        };

        this.setState(({data}) => {
            const newData = [...data, newEmp];
            return {
                data: newData
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (items.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term}); 
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }


    onFilterSelect = (filter) => {
        this.setState({filter});
    }
    
    render() {
        const {data, term, filter} = this.state;
        const countIncrease = data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo 
                allEmp={data.length}
                allIncrease={countIncrease}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
    
                <EmployeesAddForm onAdd={this.onAdd}/>
            </div>
        );
    }
}

export default App;