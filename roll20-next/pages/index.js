import Sidebar from "./components/sidebar/Sidebar";
import Panel from "./components/Panel";
import DialogWindow from './components/Dialog/DialogWindow';
import MyContext from "./core/MyContext";
import { useState } from "react";

export default function Home() {
  const [dialogDisplay, setDialogDisplay] = useState('d-none');
  const [dialogChar, setDialogChar] = useState('biska');

  const changeContextState = (char, display) => {
    setDialogChar(char);
    setDialogDisplay(display);
  }

  return (
    <div className='wrapper'>
      <MyContext.Provider value={{state: {id: dialogChar, display: dialogDisplay}, changeState: (char, shouldDisplay) => changeContextState(char, shouldDisplay)}}>
        <Sidebar></Sidebar>
        <Panel></Panel>
        <DialogWindow />
      </MyContext.Provider>
  </div>
  )
}