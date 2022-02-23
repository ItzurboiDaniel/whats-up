import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import React, {useEffect, useState} from "react"
import Pusher from "pusher-js";
import axios from "./axios";

function App() {

  const [messages, setMessages] = useState([]);

  // [] means run once
  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data)
      })
  }, [])

    // run when messages changes
  useEffect(() => {
    //once
    const pusher = new Pusher('b3401703ef6714b80f8a', {
      cluster: 'ap1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      //alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    // tear down function
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages])

  console.log(messages)

  return (
    <div className="app">
      <div className="app_body">
         {/* SideBar */}
          <Sidebar lastMessage={messages[messages.length-1].message}/>

          {/* Chat Box */}
          <Chat messages={messages} />
      </div>
     
    </div>
  );
}

export default App;
