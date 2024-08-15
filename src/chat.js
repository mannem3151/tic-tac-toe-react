export function createConnection(serverUrl, roomId) {
  return {
    connect() {
      console.log("✅ connecting to " + roomId + "room at" + serverUrl + "...");
    },
    disconnect() {
      console.log("❌ disconnecting from" + roomId + "room at" + serverUrl);
    },
  };
}
