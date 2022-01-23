import React from 'react';
import './ProductDetail.css';
export default function ProductDetail({ data, bgColor = "#fff", isInWishlist = false, handleLikeClick = undefined }) {

    const [imgSelected, setImgSelected] = React.useState(0);
    const [imgStyle, setImgStyle] = React.useState({});

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        setImgStyle({
            transform: 'scale(1.5)',
            objectPosition: `${(-x + 30) * 1.5}px ${(-y + 50) * 1.5}px`,
            transition: 'transition: all 0s ease'
        })
    }
    return (
        <div>
            <div
                className='product-detail-bg'
                style={{ background: bgColor }}
            >
            </div>
            <div className='product-detail'>
                <div className='img-section'>
                    <div className='img-list'>
                        {
                            data.img.map((img, index) =>
                                <img
                                    src={img} alt={"img " + index} key={index}
                                    onClick={() => setImgSelected(index)}

                                    style={{
                                        filter: imgSelected === index && 'brightness(0.9)',
                                        borderColor: imgSelected === index && '#666',
                                    }}
                                />)
                        }
                    </div>
                    <div className='img-main'>
                        <img
                            src={data.img[imgSelected]} alt={"img "}
                            onMouseMove={(e) => handleMouseMove(e)}
                            style={imgStyle}
                            onMouseLeave={() => setImgStyle({})}
                        />
                    </div>
                </div>
                <div className='content-section'>
                    <div className='content-head'>
                        <h1>{data.name}</h1>
                        <div className='bar-1'></div>
                        <h4>{data.price} $</h4>
                    </div>
                    <div className='content-description'>
                        <h4>category</h4>
                        <p>
                            {data.category}
                        </p>
                        <h4>description</h4>
                        <p>
                            {data.description}
                        </p>
                    </div>
                    <div className='content-action'>
                        <button className='btn-pr'>
                            add to cart
                        </button>
                        <button
                            className='btn-heart'
                            onClick={handleLikeClick}
                        >
                            <i
                                className="fas fa-heart"
                                style={{
                                    fontWeight: isInWishlist && "900",
                                    color: "var(--blue-dark)"
                                }}>
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
