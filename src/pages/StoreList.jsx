import React from 'react';
import AggridComp from '../components/AggridComp';
import * as gridData from "../data/data.json";
import {useNavigate} from "react-router-dom";

const StoreList = ({stateChanger}) => {

    const navigate = useNavigate();

    const storeListData = gridData.default.storeItems;

    const buyClickHandler = (item) => {
        stateChanger({type: "productSelect", value: item})
        navigate("/cart");
    }

    const agGroupCellRenderer = (params) => {
        return (
            <button onClick={() => buyClickHandler(params.data)}>Buy</button>
        )
    }

    const colData= [
        { field: "picture", headerName: "Picture" },
        { field: "name", headerName: "Name"  },
        { field: "shortDesc", headerName: "Short Description"  },
        { field: "price", headerName: "Suggested Price"  },
        { field: "actualPrice", headerName: "Actual Price"  },
        { field: "discount", headerName: "% Discount"  },
        { field: "buy", headerName: "Buy", cellRenderer: agGroupCellRenderer  },
    ];

    const rowData = [
        { picture: "Tesla", name: "Model Y", shortDesc: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ];

    

    const gridOptions = {
        columnDefs: [
            // 1 - String - The name of a Cell Component registered with the grid.
            {
                field: 'buy',
                // cellRenderer: (params) => {
                //     return (
                //             <button>Buy</button>
                //     )
                // },
            },            
        ]
    }

    return (
        <div>
            <AggridComp
                columnData = {colData}
                rowData={storeListData}
                gridOptns={gridOptions}
            />
        </div>
    )
}

export default StoreList