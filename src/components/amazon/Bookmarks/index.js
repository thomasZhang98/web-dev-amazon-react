import React from "react";
import BookmarkListItem from "./bookmark-item";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BookmarkList = () => {
  const bookmarks = useSelector((state) => state.bookmarks);
  return (
    <div className="mt-2">
      <ul className="list-group mt-2">
        <li className="list-group-item">
          <b>Bookmark</b>
        </li>
        {bookmarks.map((bookmark) => {
          return (
            <BookmarkListItem key={bookmark.productName} product={bookmark} />
          );
        })}
      </ul>
    </div>
  );
};
export default BookmarkList;
