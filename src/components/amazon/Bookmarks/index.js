import React from "react";
import BookmarkListItem from "./bookmark-item";
import { useSelector } from "react-redux";

const BookmarkList = () => {
  const bookmarks = useSelector((state) => state.bookmarks);
  return (
    <ul className="wd-list-group-mine list-group mt-2">
      <li className="list-group-item">
        <b>Bookmark</b>
      </li>
      {bookmarks.map((bookmark) => {
        return (
          <BookmarkListItem key={bookmark.productName} product={bookmark} />
        );
      })}
    </ul>
  );
};
export default BookmarkList;
