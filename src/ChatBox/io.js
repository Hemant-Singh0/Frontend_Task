import { io } from "socket.io-client";
const BASE_URL = "http://localhost:5050";

let socket;
export default socket = io(BASE_URL);
