// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";

// const ChatScreen = () => {
//   const [message, setMessage] = useState("");
//   const [chatMessages, setChatMessages] = useState([
//     { sender: "User 1", message: "Hello" },
//     { sender: "User 2", message: "Hi, how are you?" },
//     { sender: "User 1", message: "I'm good, thanks! How about you?" },
//     { sender: "User 2", message: "I'm doing great too!" },
//     // ...and so on
//   ]);

//   const handleSendMessage = () => {
//     if (message.trim() !== "") {
//       const newMessage = { sender: "User 1", message };
//       setChatMessages([...chatMessages, newMessage]);
//       setMessage("");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.chatContainer}>
//         {chatMessages.map((chat, index) => (
//           <View key={index} style={styles.messageContainer}>
//             <Image
//               source={{
//                 uri: `https://example.com/user${
//                   (index % 2) + 1
//                 }-profile-image.jpg`,
//               }}
//               style={styles.profileImage}
//             />
//             <View style={styles.messageContent}>
//               <Text style={styles.sender}>{chat.sender}</Text>
//               <Text style={styles.messageText}>{chat.message}</Text>
//             </View>
//           </View>
//         ))}
//       </View>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type a message..."
//           value={message}
//           onChangeText={(text) => setMessage(text)}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
//   chatContainer: {
//     flex: 1,
//     padding: 10,
//   },
//   messageContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   messageContent: {
//     backgroundColor: "#F0F0F0",
//     borderRadius: 10,
//     padding: 10,
//   },
//   sender: {
//     fontSize: 12,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   messageText: {
//     fontSize: 14,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//     borderTopWidth: 1,
//     borderTopColor: "#CCCCCC",
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     backgroundColor: "#F0F0F0",
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     marginRight: 10,
//   },
//   sendButton: {
//     backgroundColor: "#0084FF",
//     borderRadius: 20,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   sendButtonText: {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//   },
// });

// export default ChatScreen;

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";

// const ChatScreen = () => {
//   const [message, setMessage] = useState("");
//   const [chatMessages, setChatMessages] = useState([
//     {
//       sender: "Frank",
//       role: "User",
//       message:
//         "Bolehkah saya meminta vendor untuk diinvite dalam percakapan ini?",
//     },
//     {
//       sender: "Dimas",
//       role: "Admin",
//       message: "Oke baik pak, akan saya invite",
//     },
//     {
//       sender: "Damar",
//       role: "Vendor",
//       message:
//         "Halo Pak Franky, saya dari vendor X, semoga bisa membantu bapak",
//     },
//   ]);

//   const handleSendMessage = () => {
//     if (message.trim() !== "") {
//       const newMessage = { sender: "User 1", role: "User", message };
//       setChatMessages([...chatMessages, newMessage]);
//       setMessage("");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.chatContainer}>
//         {chatMessages.map((chat, index) => (
//           <View
//             key={index}
//             style={
//               chat.sender === "User 1"
//                 ? styles.userMessageContainer
//                 : styles.otherMessageContainer
//             }
//           >
//             {chat.sender !== "User 1" && (
//               <View style={styles.profileContainer}>
//                 <Image
//                   source={{ uri: getUserImage(chat.sender) }}
//                   style={styles.profileImage}
//                 />
//                 <View style={styles.senderInfo}>
//                   <Text style={styles.sender}>{chat.sender}</Text>
//                   <Text style={styles.role}>{chat.role}</Text>
//                 </View>
//               </View>
//             )}
//             <View style={styles.messageContent}>
//               <Text style={styles.messageText}>{chat.message}</Text>
//             </View>
//           </View>
//         ))}
//       </View>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type a message..."
//           value={message}
//           onChangeText={(text) => setMessage(text)}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const getUserImage = (sender) => {
//   switch (sender) {
//     case "Frank":
//       return "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";
//     case "Dimas":
//       return "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";
//     case "Damar":
//       return "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";
//     default:
//       return "";
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
//   chatContainer: {
//     flex: 1,
//     padding: 10,
//   },
//   userMessageContainer: {
//     flexDirection: "row-reverse",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   otherMessageContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   profileContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 5,
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginLeft: 10,
//   },
//   senderInfo: {
//     alignItems: "flex-start",
//   },
//   sender: {
//     fontSize: 12,
//     fontWeight: "bold",
//   },
//   role: {
//     fontSize: 10,
//     color: "#888888",
//   },
//   messageContent: {
//     backgroundColor: "#F0F0F0",
//     borderRadius: 10,
//     padding: 10,
//     maxWidth: "80%",
//   },
//   messageText: {
//     fontSize: 14,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//     borderTopWidth: 1,
//     borderTopColor: "#CCCCCC",
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     backgroundColor: "#F0F0F0",
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     marginRight: 10,
//   },
//   sendButton: {
//     backgroundColor: "#0084FF",
//     borderRadius: 20,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   sendButtonText: {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//   },
// });

// export default ChatScreen;

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from "react-native";

const Message = ({ sender, content, image, name, role }) => {
  return (
    <View style={sender ? styles.senderContainer : styles.receiverContainer}>
      <Image source={{ uri: image }} style={styles.profileImage} />
      <View style={sender ? styles.senderContent : styles.receiverContent}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userRole}>{role}</Text>
        <Text>{content}</Text>
      </View>
    </View>
  );
};

const ChatScreen = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: false,
      content:
        "Bolehkah saya meminta vendor untuk diinvite dalam percakapan ini?",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "Frank",
      role: "User",
    },
    {
      id: 2,
      sender: true,
      content: "Oke baik, saya akan mengundang vendor tersebut.",
      image:
        "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "Dimas",
      role: "Admin",
    },
    {
      id: 3,
      sender: true,
      content:
        "Halo Pak Damar, saya dari vendor X, semoga bisa membantu Bapak.",
      image:
        "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "Damar",
      role: "Vendor",
    },
  ]);

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        sender: true,
        content: inputText,
        image: "https://your-profile-image-url",
        name: "Your Name",
        role: "Your Role",
      };
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Message
            sender={item.sender}
            content={item.content}
            image={item.image}
            name={item.name}
            role={item.role}
          />
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tulis pesan..."
          value={inputText}
          onChangeText={setInputText}
        />
        <Button title="Kirim" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  senderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  receiverContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  senderContent: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#DCF8C6",
  },
  receiverContent: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#F4F4F4",
  },
  userName: {
    fontWeight: "bold",
    marginBottom: 2,
  },
  userRole: {
    fontSize: 12,
    color: "gray",
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default ChatScreen;
