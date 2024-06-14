import React, {useContext} from 'react';
import AggridComp from '../components/AggridComp';
import * as gridData from "../data/data.json";
import {useNavigate} from "react-router-dom";
import { ContextDispatch } from '../App';

const StoreList = ({stateChanger}) => {

    const navigate = useNavigate();

    const storeListData = gridData.default.storeItems;

    const stateImport = useContext(ContextDispatch);

    const buyClickHandler = (item) => {
        stateChanger({type: "productSelect", value: item.data})
        navigate("/cart");
    }

    const buyBtnRenderer = (params) => {
        return (
            <button className='btn-1' onClick={() => buyClickHandler(params)}>Buy</button>
        )
    };

    const picColRenderer = (params) => {
        return (
            <img style={{height: "100%"}} src={params.data.picture} />
        )
    }

    const actualPriceRenderer = (params) => {
        let actualPrice = Math.floor(params.data.price - (params.data.price*params.data.discount/100));
        
        return actualPrice;
    }

    const colData= [
        { field: "picture", headerName: "Picture", cellRenderer: picColRenderer },
        { field: "name", headerName: "Name"  },
        { field: "shortDesc", headerName: "Short Description"  },
        { field: "price", headerName: "Suggested Price"  },
        { field: "discount", headerName: "% Discount"  },
        { field: "actualPrice", headerName: "Actual Price", cellRenderer: actualPriceRenderer   },
        { field: "buy", headerName: "Buy", cellRenderer: buyBtnRenderer  },
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