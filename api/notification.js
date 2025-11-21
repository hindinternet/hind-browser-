// Notification Module
module.exports = {
    send: (title, message) => {
        console.log(`Notification Sent -> ${title}: ${message}`);
        return { success: true };
    },

    schedule: (title, message, time) => {
        console.log(`Notification Scheduled at ${time} -> ${title}`);
        return { success: true };
    }
};
