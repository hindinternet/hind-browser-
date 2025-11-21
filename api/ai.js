// ai.js
// HIND-AI Core API

module.exports = {
  aiSummary: (req, res) => {
    const text = req.body.text || "No text provided";
    res.json({
      status: "ok",
      summary: `AI summary of: ${text}`
    });
  },

  aiChat: (req, res) => {
    const message = req.body.message || "Hello";
    res.json({
      status: "ok",
      reply: `AI reply to: ${message}`
    });
  },

  detectIntent: (req, res) => {
    const query = req.body.query || "";
    res.json({
      status: "ok",
      intent: "general_request",
      queryAnalyzed: query
    });
  }
};
