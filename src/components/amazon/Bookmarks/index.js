import React, { useEffect, useState } from "react";
import { useProfile } from "../../../contexts/profile-context";
import BookmarkListItem from "./bookmark-item";

const BookmarkList = () => {
  const {profile, checkLoggedIn} = useProfile();
  console.log(profile.bookmarks)

  

  return (
    <div className="mt-2">
      <ul className="list-group mt-2">
        <li className="list-group-item">
          <b>Bookmark</b>
        </li>
        {profile.bookmarks.map((bookmark) => {
          return (
            <BookmarkListItem key={bookmark} product={bookmark} />
          );
        })}
      </ul>
    </div>
  );
};
export default BookmarkList;
