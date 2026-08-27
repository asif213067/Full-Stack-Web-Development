// Function to fetch user details from an API
async function getUserProfile(userId) {
  try {
    console.log("Fetching user data...");

    // 1. Send the HTTP request and pause execution until the response headers arrive
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    // 2. Check if the HTTP status code indicates success (e.g., 200 OK)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 3. Pause execution while reading and parsing the response body as JSON
    const userData = await response.json();

    // 4. Return or process the parsed data
    console.log("User Data Received:");
    console.log(`Name: ${userData.name}`);
    console.log(`Email: ${userData.email}`);
    
    return userData;
  } catch (error) {
    // Catch network failures or thrown errors from above
    console.error("Failed to fetch user data:", error.message);
  } finally {
    console.log("Fetch operation complete.");
  }
}

// Call the async function
getUserProfile(1);



// output
// Fetching user data...
// User Data Received:
// Name: Leanne Graham
// Email: Sincere@april.biz
// Fetch operation complete.