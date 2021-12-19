import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';

function App() {
    const [tableProps, setTableProps] = useState({});
    return (
        <div className="App">
            <Form setTableProps={setTableProps}/>
            <Table {...tableProps}/>
        </div>
    );
}

export default App;