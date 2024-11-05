import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employess-add-form/employees-add-form';

function App() {

    const data = [
        {name: 'Danil K.', salary: '1000', increase: true, id: 1},
        {name: 'Yarik K.', salary: '300', increase: false, id: 2},
        {name: 'Artur H.', salary: '900', increase: true, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>

            <EmployeesAddForm/>
        </div>
    );
}

export default App;