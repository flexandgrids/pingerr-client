export const chat = {
  credentials: {
    chatId: "1",
    startedOn: "2025-01-22T05:33:25Z",
    status: "active",
    blockedBy: null, //userId
    isDeleted: false,
  },
  messages: [
    {
      msgId: 1,
      senderId: 1,
      receiverId: 2,
      message: "Hello",
      isDeleted: false,
      sentOn: "2025-01-22T05:33:26Z",
      deliveredOn: "2025-01-22T05:33:28Z",
      seenOn: "2025-01-22T05:33:28Z",
    },
    {
      msgId: 2,
      senderId: 2,
      receiverId: 1,
      message: "Hi",
      isDeleted: false,
      sentOn: "2025-01-22T05:33:26Z",
      deliveredOn: "2025-01-22T05:33:28Z",
      seenOn: "2025-01-22T05:33:28Z",
    },
    {
      msgId: 3,
      senderId: 1,
      receiverId: 2,
      message: "How are you?",
      isDeleted: false,
      sentOn: "2025-01-22T05:33:26Z",
      deliveredOn: "2025-01-22T05:33:28Z",
      seenOn: "2025-01-22T05:33:28Z",
    },
    {
      msgId: 4,
      senderId: 2,
      receiverId: 1,
      message:
        "I'm good. what about you? I thought you're in university right now.",
      isDeleted: false,
      sentOn: "2025-01-22T05:33:26Z",
      deliveredOn: "2025-01-22T05:33:28Z",
      seenOn: "2025-01-22T05:33:28Z",
    },
  ],
  participants: [
    {
      userId: 1,
      email: "ahmad1@gmail.com",
      username: "ahmad_raza1",
      name: "Ahmad Raza 1",
    },
    {
      userId: 2,
      email: "ahmad2@gmail.com",
      username: "ahmad_raza2",
      name: "Ahmad Raza 2",
    },
  ],
  totalMessages: 2,
};
