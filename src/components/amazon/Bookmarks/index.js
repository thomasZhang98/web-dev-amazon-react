import React from "react";
import BookmarkListItem from "./bookmark-item";
import { useSelector } from "react-redux";

const BookmarkList = () => {
  const bookmarks = useSelector((state) => state.bookmarks);
  return (
    <ul className="list-group mt-2">
      <li className="list-group-item wd-border-black">
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
