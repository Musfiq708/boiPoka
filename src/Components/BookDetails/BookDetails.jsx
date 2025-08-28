import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function BookDetails() {

    const { bookId } = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)

    const {bookId: bkid,image} = book;
    return (
        <div className='flex w-11/12 mx-auto items-center justify-around'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='flex gap-3'>
               <button className="btn btn-soft btn-secondary">Read</button> 
               <button className="btn btn-soft btn-secondary">Wishlist</button>
            </div>
        </div>
    )
}
