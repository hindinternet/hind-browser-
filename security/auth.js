// Authentication placeholder

function login(user, password) {
    console.log(`Login attempted for user: ${user}`);
    return true; // Placeholder: always allow
}

function logout(user) {
    console.log(`Logout attempted for user: ${user}`);
    return true;
}

module.exports = { login, logout };
