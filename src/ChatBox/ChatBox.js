import React, { useState, useEffect } from "react";
import socket from "./io";

const ChatBox = () => {
  const [inputField, setInputField] = useState({
    name: "",
    room: "",
    massage: "",
  });
  const [isChatBox, setIsChatBox] = useState(false);
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessagesList([...messagesList, data]);
    });
  });

  const inputHandler = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const enterRoom = () => {
    setIsChatBox(true);
    socket.emit("join_room", inputField.room);
  };

  const sendMessage = async () => {
    await socket.emit("send_message", inputField);
    setMessagesList([...messagesList, inputField]);
    setInputField({ ...inputField, massage: "" });
  };

  return (
    <>
      {!isChatBox ? (
        <>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={inputHandler}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter Room"
            name="room"
            onChange={inputHandler}
          />
          <br />
          <br />
          <button onClick={enterRoom}>Enter Room</button>
        </>
      ) : (
        <>
          <div>
            <h1>Room</h1>
            <input
              type="text"
              placeholder="Enter Message"
              name="massage"
              onChange={inputHandler}
              value={inputField.massage}
            />
            <button onClick={sendMessage}>send</button>
            {messagesList.map((i, index) => {
              return (
                <>
                  <div key={index}>
                    {i.name}:{i.massage}
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default ChatBox;
