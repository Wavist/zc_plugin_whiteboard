module.exports = {
  // Port to run the server on
  PORT: process.env.PORT || 5000,

  // Cetrifugo Credentials
  SOCKER_KEY:
    process.env.SOCKER_TOKEN || "58c2400b-831d-411d-8fe8-31b6e337738b",
  SOCKET_URL: process.env.SOCKET_URL || "https://realtime.zuri.chat/api",

  // Database Credentials
  DATABASE: {
    // Get Our PluginID from ENV or use the test_id
    PLUGIN_ID: process.env.PLUGIN_ID || "6177563e01341f0a7a53dcb9",
    // Get Our PluginID from ENV or use the test_id
    ORGANISATION_ID: process.env.ORGANISATION_ID || "612a3a914acf115e685df8e3",
    // Endpoint for the database write operations
    ZC_CORE_DB_WRITE: 'https://api.zuri.chat/data/write',
    // Endpoint for the database read operations
    ZC_CORE_DB_READ: 'https://api.zuri.chat/data/read',
    // endpoint for deleting data
    DELETE_URL: 'https://api.zuri.chat/data/delete',
  },
   // Verify user auth status with this URL
   WELCOME_URL: 'https://api.zuri.chat/auth/verify-token',

   // cookie from zc_core that expires in 2037
   COOKIES:
     'f6822af94e29ba112be310d3af45d5c7=MTYzNDE0OTkzNnxHd3dBR0RZeE5qY3hOVFE1T1dZM1lUYzVNR013T0dReU1qSm1NUT09fLxiYT50kNCayZQN_E_MlGlI3lbTETEX07XZYa-tcttk',

  // Fetch user zc_core endpoint
  USER_URL: "https://api.zuri.chat/users/",
};
