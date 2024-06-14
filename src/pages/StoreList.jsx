import React, {useContext, useEffect, useState} from 'react';
import AggridComp from '../components/AggridComp';
import * as gridDatas from "../data/data.json";
import {useNavigate} from "react-router-dom";
import { ContextDispatch } from '../App';

const StoreList = ({}) => {

    const navigate = useNavigate();
    const [gridData, setGridData] = useState([]);

    const storeListData = gridDatas.default.storeItems;

    useEffect(() => {
        let newArr = storeListData.map((elem) => {
            let actualPrice = Math.floor(elem.price - (elem.price*elem.discount/100));
            return {...elem, actualPrice};
        })
        setGridData(newArr);
    }, []);

    const stateImport = useContext(ContextDispatch);

    const buyClickHandler = (item, a) => {
        stateImport.stateChanger({type: "productSelect", value: item.data})
        stateImport.stateChanger({type: "actPrice", value: item.data.actualPrice
        });
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
        { field: "picture", headerName: "Picture", cellRenderer: picColRenderer, sortable: false },
        { field: "name", headerName: "Name", filter: "agTextColumnFilter"  },
        { field: "shortDesc", headerName: "Short Description", filter: "agTextColumnFilter",  sortable: false  },
        { field: "price", headerName: "Suggested Price"  },
        { field: "discount", headerName: "% Discount",  sortable: false  },
        { field: "actualPrice", headerName: "Actual Price", cellRenderer: actualPriceRenderer   },
        { field: "buy", headerName: "Buy", cellRenderer: buyBtnRenderer,  sortable: false},
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
                rowData={gridData}
                gridOptns={gridOptions}
            />
        </div>
    )
}

export default StoreList