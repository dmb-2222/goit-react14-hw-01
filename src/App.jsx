import React from 'react';
import Profile from './components/Profile/Profile';
import Stats from './components/Stats/Stats';
import FrienList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import friends from '../src/friends.json';
import userProfile from '../src/user.json';
import transactions from '../src/transactions.json';

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

function App() {
  return (
    <>
      <Profile user={userProfile} />
      <Stats title="Upload stats" stats={stats} />
      <FrienList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
