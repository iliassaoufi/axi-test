import React from 'react';
import './Pagination.css';
export default function Pagination({ data = 0, indexPagination, setIndexPagination }) {

    return (
        <>
            <button
                onClick={() => setIndexPagination(indexPagination <= 0 ? 0 : indexPagination - 1)}
            >
                <i className="fas fa-angle-left"></i>
            </button>
            {
                Array(Math.floor((data / 4)) + 1).fill(0).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndexPagination(i)}
                        style={{
                            border: i === indexPagination && '4px solid var(--blue)'
                        }}
                    >
                        {i + 1}
                    </button>
                ))
            }
            <button
                onClick={() => setIndexPagination(indexPagination + 1 > Math.floor(data / 4) ? indexPagination : indexPagination + 1)}
            >
                <i className="fas fa-angle-right"></i>
            </button>
        </>
    );
}
