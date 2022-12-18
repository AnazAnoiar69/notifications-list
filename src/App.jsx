import { useState } from "react";
import "./App.css";
import NotificationItem from "./components/NotificationItem";
import db from "./assets/db.js";

function App() {
  const [newCounter, setNewCounter] = useState(1);
  const [isReadAll, setIsReadAll] = useState(false);
  const comments = db();

  return (
    <div className="App">
      <div className="px-4 mb-12">
        <div className="flex justify-between my-6">
          <div className="title flex items-end space-x-4">
            <h2>Notification</h2>
            <div className="flex justify-center items-center bg-indigo-700 rounded-md text w-8 h-8">
              <span className="leading-none flex items-center">
                {newCounter}
              </span>
            </div>
          </div>
          <span
            className="flex items-end text-sm cursor-pointer"
            onClick={() => setIsReadAll(!isReadAll)}
          >
            Mark all as {isReadAll ? "unread" : "read"}
          </span>
        </div>
        <ul className="px-2 flex flex-wrap space-y-2">
          {comments.map((comment) => {
            return (
              <NotificationItem
                key={comment.id}
                comment={{ comment }}
                isReadAll={isReadAll}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
