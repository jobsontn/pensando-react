import React from 'react';
import Menu from './Menu';
import UserProfile from './UserProfile';

export default function Header() {
  return (
    <header className="w-full flex flex-row justify-between items-end">
      <Menu />
      <UserProfile />
    </header>
  );
}
