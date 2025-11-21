// voice.js
// Voice Control API (Speech-to-Text and Commands)

module.exports = {
  speechToText: (req, res) => {
    res.json({
      status: "ok",
      text: "Sample recognized voice text"
    });
  },

  voiceCommand: (req, res) => {
    const command = req.body.command || "no command";
    res.json({
      status: "ok",
      commandReceived: command,
      action: "executed"
    });
  }
};
