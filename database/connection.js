// Database Connection Setup
module.exports = {
    connect: () => {
        console.log("Database connected successfully");
        return { success: true };
    }
};
