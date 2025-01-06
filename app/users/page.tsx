// "use client";

// import React, { useCallback, useEffect, useState } from "react";
// import { toast } from "react-hot-toast";

// interface UsersPageProps {
//   user: string;
//   error: string;
// }

// const UsersPage = () => {
//   const [userProfile, setUserProfile] = useState();

//   const getUserProfile = useCallback(async () => {
//     try {
//       const userRes = await fetch("https://api.github.com/users/git-mern");
//       const userProfile = await userRes.json();
//       console.log("profile", userProfile);
//       setUserProfile(userProfile);
//     } catch (error) {
//       toast.error("error");
//     }
//   }, []);

//   useEffect(() => {
//     getUserProfile();
//   }, [getUserProfile]);

//   return (
//     <div>
//       <h2>{userProfile.name}</h2>
//     </div>
//   );
// };

// export default UsersPage;

"use client";

import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const UsersPage = () => {
  const [userProfile, setUserProfile] = useState<any>(null);
  const [user, setUser] = useState<string>(""); // For storing the search input
  const [loading, setLoading] = useState<boolean>(false); // For loading state

  // Fetch user profile from GitHub API
  const getUserProfile = useCallback(async (username: string) => {
    if (!username) return; // Don't fetch if the username is empty
    setLoading(true); // Set loading to true when fetching starts
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) {
        toast.error("User not found!");
        setUserProfile(null); // Clear user profile if not found
        return;
      }
      const userProfile = await userRes.json();
      console.log("profile", userProfile);
      setUserProfile(userProfile);
    } catch (error) {
      toast.error("An error occurred while fetching user details.");
    } finally {
      setLoading(false); // Set loading to false once fetching is complete
    }
  }, []);

  // Handle the search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getUserProfile(user);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>

      {/* Search form */}
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={user}
          onChange={(e) => setUser(e.target.value)} // Update the search input value
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      {/* Display user profile details if available */}
      {userProfile ? (
        <div>
          <h2>{userProfile.name}</h2>
          <p>{userProfile.bio}</p>
          <p>Followers: {userProfile.followers}</p>
          <p>Following: {userProfile.following}</p>
          <p>Public Repos: {userProfile.public_repos}</p>
          <a
            href={userProfile.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile on GitHub
          </a>
        </div>
      ) : (
        !loading && user && <p>No user found or please try searching again.</p>
      )}
    </div>
  );
};

export default UsersPage;
