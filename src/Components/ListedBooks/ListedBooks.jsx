import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../Utilities/addToDB';
import Book from '../Book/Book';
import { IoIosArrowDropdown } from "react-icons/io";

export default function ListedBooks() {

    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');

    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
    }, [])

    const handleSort = (sortType) => {
        setSort(sortType);

        if (sortType === 'Pages') {
            
            const shortedReadList = [...readList].sort((a , b) => a.totalPages - b.totalPages);
            setReadList(shortedReadList);
        }
        if (sortType === 'Ratings') {
            
            const shortedReadList = [...readList].sort((a , b) => b.rating - a.rating);
            setReadList(shortedReadList);
        }
        if (sortType === 'Year') {
            
            const shortedReadList = [...readList].sort((a , b) => b.yearOfPublishing - a.yearOfPublishing);
            setReadList(shortedReadList);
        }

    }
    return (
        <div className='text-center'>
            <h2 className='text-4xl'>Hello Books</h2>
            <div className="dropdown dropdown-bottom ">
                <div tabIndex={0} role="button" className="btn m-1">
                    {
                        sort ? `Sort By : ${sort}` : 'Sort By'
                    } </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSort('Ratings')}><a>Rating</a></li>
                    <li onClick={() => handleSort('Pages')}><a>Number of pages</a></li>
                    <li onClick={() => handleSort('Year')}><a>Publisher year</a></li>
                </ul>
            </div>
            <div className='text-left'>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content {readList.length}</h2>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
{/* < IoIosArrowDropdown className='text-2xl'/> */ }