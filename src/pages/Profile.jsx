import React from 'react';
import './Pages.css';

const Profile = () => {
  const user = {
    name: 'John Doe',
    username: 'johndoe',
    bio: 'Frontend Developer | UI/UX Enthusiast',
    location: 'New York, USA',
    followers: 1000,
    following: 500,
    posts: 250,
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <img
          src="https://example.com/profile-picture.jpg"
          alt="Profile"
          className="profile-picture"
        />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-username">@{user.username}</p>
        <p className="profile-bio">{user.bio}</p>
        <p className="profile-location">
          <i className="fas fa-map-marker-alt"></i> {user.location}
        </p>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <p className="stat-label">Followers</p>
          <p className="stat-value">{user.followers}</p>
        </div>
        <div className="stat">
          <p className="stat-label">Following</p>
          <p className="stat-value">{user.following}</p>
        </div>
        <div className="stat">
          <p className="stat-label">Posts</p>
          <p className="stat-value">{user.posts}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
