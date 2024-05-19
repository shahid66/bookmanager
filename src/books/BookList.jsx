import React from "react";
import Books from "../../public/assets/book.png";
import { FaStar } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const BookList = ({ book, isFav }) => {
  let star = book.star;
  const elements = [];
  for (let i = 1; i <= star; i++) {
    elements.push(<FaStar key={i} className="text-yellow-500" />);
  }

  return (
    <>
      <div className="space-y-3">
        <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
          <img className="max-w-[144px]" src={Books} />
        </div>

        <div className="space-y-3">
          <h4 className="text-lg font-bold lg:text-xl">{book.title}</h4>
          <p className="text-xs lg:text-sm">
            By : <span>{book.author}</span>
          </p>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold lg:text-xl">${book.price}</h4>

            <div className="flex items-center space-x-1">
              {elements}

              <span className="text-xs lg:text-sm">({book.star} Star)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs lg:text-sm">
            <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
              <IoMdCart />
              Add to Cart
            </button>
            <button
              className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5 ${
                book.isFavourite && "bg-red-100 hover:bg-red-200"
              }`}
              onClick={() => isFav(book.id)}
            >
              {book.isFavourite ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart />
              )}
              Favourite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookList;
