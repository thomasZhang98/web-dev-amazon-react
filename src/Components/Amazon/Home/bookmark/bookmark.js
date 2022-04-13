import React from "react";
import BookmarkListItem from "./bookmark-item";
import {useSelector} from "react-redux";

const BookmarkList = () => {
  const bookmark = useSelector((state) => state.bookmark);
  return (
      <ul className="list-group mt-2">
        <li className="list-group-item">
          <b>Bookmark</b>
        </li>
        {bookmark.map(bookmark => {
          return (
              <BookmarkListItem key={bookmark.productName} product={bookmark}/>
          );
        })}

      </ul>
  );
}
export default BookmarkList;
