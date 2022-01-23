import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../../../redux/ProductSlice'
import ProductDetail from './ProductDetail';
import './ProductCard.css';
import Modal from '../../utils/Modal';

export default function ProductCard({ data }) {

    const wishlist = useSelector((state) => state.product.wishlist);
    const dispatch = useDispatch();
    const isInWishlist = wishlist.includes(data.id);

    const [showModal, setShowModal] = React.useState(false);
    const [color, setColor] = React.useState("#fff");
    const [isLiked, setIsLiked] = React.useState(isInWishlist);
    const colors = [
        "#EAECEE",
        "#F2F4F4",
        "#F8F9F9",
        "#FDF2E9",
        "#EAFAF1",
        "#EBF5FB",
        "#F4ECF7",
        "#FDEDEC",
    ];
    React.useEffect(() => {
        getRandomColor();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getRandomColor = () => {
        const i = Math.floor(Math.random() * colors.length)
        setColor(colors[i]);
    };
    const handleLikeClick = () => {
        if (isLiked) {
            setIsLiked(false);
            dispatch(removeFromWishlist(data.id));
        }
        else {
            setIsLiked(true);
            dispatch(addToWishlist(data.id))
        }
    }


    return (
        <div
            className='product-card'
            style={{ background: color }}
        >
            <div className='product-card-img' >
                <img src={data.img[0]} alt='' />
            </div>
            <div className='product-card-content'>
                <div className='head'>
                    <h4>{data.name.slice(0, 30)}</h4>
                    <h4>{data.price} $</h4>
                </div>
                <p>{data.description.slice(0, 74)}.</p>
                <div className='product-card-action'>
                    <button
                        className='btn-heart'
                        onClick={handleLikeClick}
                    >
                        <i className="fas fa-heart" style={{ fontWeight: isLiked && "900", color: "var(--blue-dark)" }}></i>
                    </button>
                    <button
                        className='btn-buy'
                        onClick={() => setShowModal(true)}
                    >
                        Buy <i className="fas fa-shopping-bag"></i>
                    </button>
                </div>

                <Modal onClose={() => setShowModal(false)} show={showModal}>
                    <ProductDetail
                        bgColor={color}
                        data={data}
                        isInWishlist={isLiked}
                        handleLikeClick={handleLikeClick}
                    />
                </Modal>
            </div>
        </div>
    );
}
