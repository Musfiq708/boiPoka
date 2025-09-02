import { Link } from "react-router-dom";

export default function Book({ book }) {
    const { bookId, bookName, author, image, tags, category, rating,totalPages ,yearOfPublishing} = book;
    return (
        <Link to={
            `/books/${bookId}`
        }>
            <div className="card    p-6 rounded-2xl border border-[#13131326]">
                <figure className="h-[230px]  bg-[#F3F3F3] rounded-2xl">
                    <img
                        className="h-[166px] object-cover"
                        src={image} />
                </figure>
                <div className="card-body px-0">
                    <div className="flex gap-3">
                        <div className="badge badge-secondary">{tags[0]}</div>
                        <div className="badge badge-secondary">{tags[1]}</div>
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    <p>Published Year : {yearOfPublishing}</p>

                </div>
                <hr className="bg-[#13131326]" />
                <div className="flex justify-between mt-5 items-center">
                    <h1>{category}</h1>
                    <h1>Pages : {totalPages}</h1>
                    <div className="flex gap-2 items-center">
                        <h1>{rating}</h1>
                        <div className="rating rating-lg">
                            
                            <input type="radio" name="rating-10" className="mask mask-star-2" aria-label="2 star" defaultChecked />
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
