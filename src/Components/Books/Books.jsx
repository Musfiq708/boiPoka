import { useEffect, useState } from "react"

export default function Books() {

const [books, setBooks] = useState([])
useEffect(() =>{
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))
} ,[])
  return (
    <div className='w-11/12 mx-auto mb-[80px]'>
      <h3 className='text-center font-semibold text-4xl'>Books</h3>
    </div>
  )
}
