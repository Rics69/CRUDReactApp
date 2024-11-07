import './app-info.css';

const AppInfo = ({allEmp, allIncrease}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {allEmp}</h2>
            <h2>Премию получат: {allIncrease}</h2>
        </div>
    );
}

export default AppInfo;