"use strict";
// Problem 1 — Gaming Age Rating Checker
// Concepts: function parameter types, return types, string, conditional logic
// Function name must be: getAgeRatingAccess
// Scenario
// A gaming platform, similar to Steam or the PlayStation Store, needs to determine which age-rating category of games a user is allowed to access, based on their age.
// Task
// Create a function named getAgeRatingAccess. The function should receive the user's age and return the highest age-rating category they can access.
// Rating Rules
// Age             Access Level
// Below 7         "E (Everyone)"
// 7–12            "E10+ (Everyone 10+)"
// 13–16           "T (Teen)"
// 17 or above     "M (Mature)"
Object.defineProperty(exports, "__esModule", { value: true });
// Function Requirement
// Accept the age as a number.
// Return the access level as a string.
// Correctly handle all age ranges.
// Starter Code
function getAgeRatingAccess(age) {
    if (age < 7)
        return "E (Everyone)";
    if (age <= 12)
        return "E10+ (Everyone 10+)";
    if (age <= 16)
        return "T (Teen)";
    return "M (Mature)";
}
// Example
console.log(getAgeRatingAccess(5)); // "E (Everyone)"
console.log(getAgeRatingAccess(10)); // "E10+ (Everyone 10+)"
console.log(getAgeRatingAccess(15)); // "T (Teen)"
console.log(getAgeRatingAccess(20)); // "M (Mature)"
// Problem 2 — Smart Home WiFi Signal Status
// Concepts: function types, number, string, conditional logic, boundary conditions
// Function name must be: getSignalStatus
// Scenario
// A smart home app shows the WiFi signal strength of each connected device as a percentage. Rather than showing a raw number, the app wants to display a friendly status label.
// Task
// Create a function named getSignalStatus. The function receives the signal strength (0–100) and returns a status string.
// Status Rules
// Strength (%)          Status
// 0–20                  "Weak"
// 21–50                 "Fair"
// 51–80                 "Good"
// 81–100                "Excellent"
// Additional Requirement
// The function should return a string. Think carefully about boundary values such as:
// Starter Code
function getSignalStatus(strength) {
    if (strength <= 20)
        return "Weak";
    if (strength <= 50)
        return "Fair";
    if (strength <= 80)
        return "Good";
    return "Excellent";
}
// Test cases
console.log(getSignalStatus(10)); // "Weak"
console.log(getSignalStatus(35)); // "Fair"
console.log(getSignalStatus(65)); // "Good"
console.log(getSignalStatus(95)); // "Excellent"
// Boundary values double-check:
console.log(getSignalStatus(20)); // "Weak"
console.log(getSignalStatus(21)); // "Fair"
console.log(getSignalStatus(80)); // "Good"
console.log(getSignalStatus(81)); // "Excellent"
function formatPlayerCard(player) {
    return `${player.username} is a Level ${player.level} player from ${player.region}.`;
}
// Example
console.log(formatPlayerCard({
    username: "ShadowByte",
    level: 42,
    region: "Asia"
}));
function calculateTotalListeningTime(tracks) {
    return tracks.reduce((sum, track) => sum + track.minutes, 0);
}
// Example
const tracks = [
    { title: "Blinding Lights", minutes: 3 },
    { title: "Levitating", minutes: 4 },
    { title: "Peaches", minutes: 3 }
];
console.log(calculateTotalListeningTime(tracks)); // 10
// another example:
const tracks2 = [
    { title: "Flowers", minutes: 3 },
    { title: "Anti-Hero", minutes: 4 }
];
console.log(calculateTotalListeningTime(tracks2)); // 7
function getPlayerStats(player1) {
    const totalScore = player1.scores.reduce((sum, score) => sum + score, 0);
    if (totalScore === 0)
        return { name: player1.name, average: 0, rank: "Rookie" };
    const average = totalScore / player1.scores.length;
    if (average < 80)
        return { name: player1.name, average: average, rank: "Rookie" };
    return { name: player1.name, average: average, rank: "MVP" };
}
// Example
console.log(getPlayerStats({
    name: "Nova",
    scores: [90, 85, 95, 80]
}));
// Expected output:
// { name: "Nova", average: 87.5, rank: "MVP" }
// another example:
console.log(getPlayerStats({
    name: "Zex",
    scores: [60, 55, 70, 50]
}));
function canAccessOfflineMode(tier) {
    return tier === "premium" || tier === "pro" ? true : false;
}
// Example
console.log(canAccessOfflineMode("free")); // false
console.log(canAccessOfflineMode("pro")); // true 
console.log(canAccessOfflineMode("premium")); // true
function findMenuItemsByTag(menu, tag) {
    return menu.filter((item) => item.tag === tag);
}
// Example
const menu = [
    { name: "Veggie Bowl", price: 350, tag: "vegan" },
    { name: "Tofu Wrap", price: 300, tag: "vegan" },
    { name: "Chicken Wings", price: 450, tag: "spicy" },
    { name: "Beef Burger", price: 500, tag: "spicy" }
];
console.log(findMenuItemsByTag(menu, "vegan")); // [{ name: 'Veggie Bowl', price: 350, tag: 'vegan' },{ name: 'Tofu Wrap', price: 300, tag: 'vegan' }]
console.log(findMenuItemsByTag(menu, "gluten-free")); // []
function renderNotification(notification) {
    if (notification.type === "like")
        return `${notification.fromUser} liked your post.`;
    if (notification.type === "system" && notification.actionUrl === undefined)
        return `System: ${notification.message}`;
    return `System: ${notification.message}. (Tap to view)`;
}
// Example
console.log(renderNotification({ type: "like", fromUser: "Aisha" }));
// "Aisha liked your post."
console.log(renderNotification({ type: "system", message: "Maintenance complete." }));
// "System: Maintenance complete."
console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }));
function updateStorageUsage(currentUsageMB, action) {
    if (action.type === "upload")
        return currentUsageMB += action.sizeMB;
    if (action.type === "delete" && action.sizeMB > currentUsageMB)
        return 0;
    return currentUsageMB -= action.sizeMB;
}
// Example
console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 })); // 2500
console.log(updateStorageUsage(2000, { type: "delete", sizeMB: 800 })); // 1200
// usage floor at zero:
console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 })); // 0
function calculateRentalFee(vehicle, minutes) {
    if (vehicle === "scooter")
        return 10 + (minutes * 2);
    if (vehicle === "ebike")
        return 15 + (minutes * 3);
    return 25 + (minutes * 5);
}
// Example
console.log(calculateRentalFee("scooter", 20)); // 50    (10 + 20 x 2)
console.log(calculateRentalFee("ebike", 20)); // 75    (15 + 20 x 3)
console.log(calculateRentalFee("moped", 20)); // 125   (25 + 20 x 5)
//# sourceMappingURL=p2.js.map