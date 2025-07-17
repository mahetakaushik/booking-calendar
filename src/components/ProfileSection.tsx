import React from "react";

interface ProfileSectionProps {
  name?: string;
  title?: string;
  avatarUrl?: string;
  profileLink?: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  name = "Nate Greenwall",
  title = "User Experience Person",
  avatarUrl = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=40&h=40&q=80",
  profileLink = "Community Profile",
}) => {
  return (
    <div className="profile-section">
      <div className="profile-avatar">
        <img src={avatarUrl} alt={name} />
      </div>
      <div className="profile-details">
        <div className="profile-info">
          <div className="profile-name">{name}</div>
          <div className="profile-title">{title}</div>
        </div>
        <div className="profile-link">{profileLink}</div>
      </div>
    </div>
  );
};

export default ProfileSection;
