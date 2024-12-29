import { SESSION_DURATION } from "./constants";
//to genrate token
const generateToken = () => {
  // In a real app, use a proper token generation library
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};
const checkAndRefreshSession = () => {
  const sessionData = localStorage.getItem("sessionData");
  if (!sessionData) return;

  const session = JSON.parse(sessionData);
  const now = new Date().getTime();

  // Check if session is expired
  if (now > session.expiresAt) {
    // Check if refresh token is still valid
    if (now < session.refreshTokenExpiresAt) {
      refreshSession(session);
    } else {
      // Both session and refresh token expired - logout
      handleLogout();
    }
  }
};
const refreshSession = (session) => {
  const now = new Date().getTime();
  const newSessionData = {
    ...session,
    accessToken: generateToken(),
    expiresAt: now + SESSION_DURATION,
    lastRefreshed: now,
  };
  localStorage.setItem("sessionData", JSON.stringify(newSessionData));
};

const handleLogout = () => {
  localStorage.removeItem("sessionData");
};
// Function to check if user is logged in and session is valid
const isAuthenticated = () => {
  try {
    const sessionData = localStorage.getItem("sessionData");
    if (!sessionData) return false;

    const session = JSON.parse(sessionData);
    const now = new Date().getTime();

    // Check if session is expired
    if (now > session.expiresAt) {
      // Check if refresh token is still valid
      if (now < session.refreshTokenExpiresAt) {
        // Refresh the session
        refreshSession(session);
        return true;
      } else {
        // Both tokens expired, logout user
        handleLogout();
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
};
// Function to get current user data
const getCurrentUser = () => {
  try {
    const sessionData = localStorage.getItem("sessionData");
    if (!sessionData) return null;

    const session = JSON.parse(sessionData);
    return {
      username: session.username,
      loginTime: session.loginTime,
      lastRefreshed: session.lastRefreshed,
    };
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
};
export {
  generateToken,
  checkAndRefreshSession,
  refreshSession,
  handleLogout,
  isAuthenticated,
  getCurrentUser,
};
