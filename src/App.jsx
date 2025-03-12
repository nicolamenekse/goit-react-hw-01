import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import React from "react";
import friends from './friend.json'
import FriendList from "./components/FriendList/FriendList";
import transactions from './transactions.json'
import TransactionHistory from './components/Transactions/TransactionHistory'


export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
