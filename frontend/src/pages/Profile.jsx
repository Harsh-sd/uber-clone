import React from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
 
  const location = useLocation();
  const userData = location.state?.user; 
  console.log(userData);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Profile Page</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        {userData ? (
          <>
            <div className="text-center mb-4">
              <img
                src={userData.profilePicture || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg">
                <strong>firstName:</strong> {userData.fullName.firstName}
              </p>
              <p className="text-lg">
                <strong>lastName:</strong> {userData.fullName.lastName}
              </p>
              <p className="text-lg">
                <strong>Email:</strong> {userData.email}
              </p>
              <p className="text-lg">
                <strong>Phone:</strong> {userData.phone || 'Not provided'}
              </p>
              <p className="text-lg">
                <strong>Address:</strong> {userData.address || 'Not provided'}
              </p>
            </div>
          </>
        ) : (
          <p className="text-center text-red-500">No user data found.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;