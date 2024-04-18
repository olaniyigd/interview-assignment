import React, { useState } from 'react';
import styled from 'styled-components';
import ToDoList from './Todo';
import UserProfile from './Userprofile';
import Weather from './Weather';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  width: 150px;
  background-color: #f0f0f0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 768px) {
    width:"300px";
    flex-direction: column;
    height: auto;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const SidebarItem = styled.li`
  list-style: none;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    color: #007bff;
  }

  @media (min-width: 768px) {
    margin-bottom: 20px;
    flex-direction: row;
  }
`;

function App() {
  const [currentPage, setCurrentPage] = useState('profile');

  const renderPage = () => {
    switch (currentPage) {
      case 'todo':
        return <ToDoList />;
      case 'weather':
        return <Weather />;
      default:
        return <UserProfile />;
    }
  };

  return (
    <Container>
      <Sidebar>
        <ul>
          <SidebarItem onClick={() => setCurrentPage('profile')}>Profile</SidebarItem>
          <SidebarItem onClick={() => setCurrentPage('todo')}>ToDo List</SidebarItem>
          <SidebarItem onClick={() => setCurrentPage('weather')}>Weather</SidebarItem>
        </ul>
      </Sidebar>
      <MainContent>
        {renderPage()}
      </MainContent>
    </Container>
  );
}

export default App;
