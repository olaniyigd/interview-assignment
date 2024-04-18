import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ccc;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;

const ProfileInfo = styled.div`
  h2 {
    margin-bottom: 5px;
  }
`;

function UserProfile() {
  // User data can be hardcoded or passed as props
  const user = {
    name: 'Olaniyi Gbadegesin',
    email: 'pharuqgbadgesin5@example.com',
    profilePicture: '/albumimage.png',
  };

  return (
    <ProfileContainer>
      <ProfileImage src={user.profilePicture} alt="Profile" />
      <ProfileInfo>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </ProfileInfo>
    </ProfileContainer>
  );
}

export default UserProfile;
