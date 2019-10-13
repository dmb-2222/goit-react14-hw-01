import React from "react";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  console.log(id);
  return (
    <li key={id} className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
export default FriendListItem;
