import { createContext } from "react";

const MyContext = createContext({state: {id: 0, display: ''}, changeState: (char, display) => {}});

export default MyContext;