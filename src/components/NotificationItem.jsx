import React, { useEffect, useState } from "react";
import "../index.css";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

function NotificationItem(props) {
  const { comment: data } = props.comment;
  const [isNew, setIsNew] = useState(data.isNew);
  const [isRead, setIsRead] = useState(data.isRead);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    isNew && setIsSelected(true);
    !isRead && setIsSelected(true);
  }, []);

  function clickHandler() {
    setIsSelected(!isSelected);
    setIsNew(false);
    setIsRead(!isRead);
  }

  return (
    <>
      <li
        className={`px-3 py-1 text-sm ${
          isSelected ? "bg-neutral-600" : "bg-neutral-800"
        } w-full hover:cursor-pointer ${
          !isSelected ? "hover:bg-neutral-600" : "hover:bg-neutral-500"
        }`}
      >
        <div className="flex my-4 space-x-2 items-start">
          <img
            className="p-1 rounded-full aspect-square w-12"
            src={data.avatar}
            alt="..."
          />
          <div className="w-full flex flex-wrap ">
            <div className="w-full flex justify-between space-x-4">
              <div className="main-text">
                <a href="">{data.userName} </a>
                {data.commentAction} <a href="">{data.commentMention}</a>
                <span
                  className={`flex-inline items-center px-1 ${
                    isNew ? "" : "hidden"
                  }`}
                >
                  <i className="fi fi-ss-circle-small text-red-500"></i>
                </span>
              </div>
              {data.haveImage ? (
                <div className="w-12 inline-block">
                  <img src={data.image} alt="" />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between items-end w-full">
              <span className="">{data.lastMessage}</span>
              <div onClick={clickHandler}>
                {isRead ? (
                  <VscEye />
                ) : (
                  <VscEyeClosed className="text-indigo-500" />
                )}
              </div>
            </div>
            {data.haveParagraph && (
              <p className="mt-4 p-4 border border-neutral-400">
                {data.paragraph}
              </p>
            )}
          </div>
        </div>
      </li>
    </>
  );
}

export default NotificationItem;
