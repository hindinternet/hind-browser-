// ads-blocker.js
// Hind Browser Advanced Ad-Blocker Module

module.exports = {

    // List of common ad domains (simplified example)
    blockedDomains: [
        "doubleclick.net",
        "adservice.google.com",
        "googlesyndication.com",
        "ads.yahoo.com",
        "tracking.example.com"
    ],

    // Function to check if a URL is blocked
    isBlocked: function(url) {
        return this.blockedDomains.some(domain => url.includes(domain));
    },

    // Function to filter network requests
    filterRequest: function(request) {
        if(this.isBlocked(request.url)) {
            return { blocked: true, reason: "Blocked by ads-blocker" };
        }
        return { blocked: false };
    },

    // Function to add custom blocked domains
    addBlockedDomain: function(domain) {
        if(!this.blockedDomains.includes(domain)) {
            this.blockedDomains.push(domain);
        }
    },

    // Function to remove a domain from blocked list
    removeBlockedDomain: function(domain) {
        this.blockedDomains = this.blockedDomains.filter(d => d !== domain);
    },

    // Function to get all blocked domains
    getBlockedDomains: function() {
        return this.blockedDomains;
    }

};
