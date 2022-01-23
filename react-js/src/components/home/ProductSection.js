import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setProductList } from '../../redux/ProductSlice'
import ProductList from '../ui/product/ProductList';
import './ProductSection.css';

export default function ProductSection() {

    const data = useSelector((state) => state.product.productList);
    const dispatch = useDispatch();

    useEffect(() => {
        getApiData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getApiData = async () => {
        try {
            const response = await axios.get("http://localhost:3004/data");
            dispatch(setProductList(response.data));
        } catch (ex) {
            console.log(ex);
        }
    }

    return (
        <div className='ProductSection'>
            <h2>New Collection</h2>
            {
                data && <ProductList data={data} />
            }
        </div>
    );
}
