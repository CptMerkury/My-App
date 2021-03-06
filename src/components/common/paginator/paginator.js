import React from 'react';
import classesItem from './paginator.module.css'

const Paginator = ({totalCount, pageSize, selectPage, isLoading, currentPage, ...props}) => {
    const pagesCount = Math.ceil(totalCount / pageSize)
    const pagesArray = new Array(pagesCount).fill(1)
    const btnArray = []

    pagesArray.map((btn, idx) => {
        return btnArray.push(idx + 1)
    })

    const pagesBtn = btnArray.map((btn) => {
        return (
            <button
                className={currentPage === btn ? classesItem.myPaginationBtnActive : classesItem.myPaginationBtn}
                onClick={() => selectPage(btn)}
                disabled={isLoading}>
                {btn}
            </button>
        )
    })
    return (
        <div>
            {pagesBtn}
        </div>
    )
}

export default Paginator