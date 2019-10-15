import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends = [] }) => {
  return (
    <ul className="friendList">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          //Оставил для себя на будущее
          //   key={friend.id}
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
