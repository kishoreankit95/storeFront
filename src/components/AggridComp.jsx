import React, {useState} from 'react';

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";

const AggridComp = ({columnData, rowData, gridOptns}) => {

    const [colDefs, setColDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ]);

    // const [rowData, setRowData] = useState([
    //     { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    //     { make: "Ford", model: "F-Series", price: 33850, electric: false },
    //     { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    // ]);

    return (
    <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 500 }} // the grid will fill the size of the parent container
        >
        <AgGridReact
            rowData={rowData}
            columnDefs={columnData}
            gridOptions={gridOptns}
        />
    </div>
  )
}

export default AggridComp