import React from 'react';
import Pagination from '../../utils/Pagination';
import Product from './ProductCard';
import './ProductList.css';

export default function ProductList({ data = [] }) {



    const [indexPagination, setIndexPagination] = React.useState(0);
    const [filterSelected, setFilterSelected] = React.useState("all");


    const categoryList = (data) => {
        let list = ["all"];
        data.forEach((e) => {
            if (list.indexOf(e.category) === -1) {
                list.push(e.category);
            }
        });
        return list;
    }
    const categoryFilter = (data) => {
        const list = data.filter((e) => e.category === filterSelected);
        return list.length > 0 ? list : data;
    }
    const handleFilterSelected = (e) => {
        setFilterSelected(e.target.value);
        setIndexPagination(0);
    }
    const productListfiltered = categoryFilter(data);
    const productListShowed = productListfiltered.slice(indexPagination * 4, 4 * (indexPagination + 1));

    return (
        <div>
            <div className='filter'>
                <select value={filterSelected} onChange={(e) => handleFilterSelected(e)} >
                    {
                        categoryList(data).map((e, i) => <option key={i} value={e}> &#9662;  &#160;  {e}</option>)
                    }
                </select>
            </div>
            <div className='product-list'>
                {
                    productListShowed.map((elem) => <Product key={elem.id} data={elem} />)
                }
            </div>
            <div className='pagination'>
                {
                    <Pagination
                        data={productListfiltered.length}
                        indexPagination={indexPagination}
                        setIndexPagination={setIndexPagination}
                    />
                }
            </div>
        </div>
    );
}
