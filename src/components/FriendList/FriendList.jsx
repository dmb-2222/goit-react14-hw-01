import React from "react";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends = [] }) => {
  return (
    <ul className="friendList">
      {friends.map(friend => (
        <FriendListItem
        //   id={friend.id}
        //   isOnline={friend.isOnline}
        //   name={friend.name}
        //   avatar= {friend.avatar}
        {...friend}
        />
      ))}
    </ul>
  );
};
export default FriendList;
