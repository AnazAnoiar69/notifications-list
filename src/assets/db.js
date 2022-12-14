const db = () => {
  const comments = [
    {
      id: 1,
      userName: "Mark Webber",
      avatar:
        "../../notifications-page-main/assets/images/avatar-mark-webber.webp",
      commentAction: "reacted to your recent post",
      commentMention: "My first tournament today!",
      isNew: true,
      isRead: false,
      isSelected: false,
      lastMessage: "1m ago",
      haveImage: false,
      image: "",
      haveParagraph: false,
      paragraph: "",
    },
    {
      id: 2,
      userName: "Angela Gray",
      avatar:
        "../../notifications-page-main/assets/images/avatar-angela-gray.webp",
      commentAction: "followed you",
      commentMention: "",
      isNew: true,
      isRead: false,
      isSelected: false,
      lastMessage: "5m ago",
      haveImage: false,
      image: "",
      haveParagraph: false,
      paragraph: "",
    },
    {
      id: 3,
      userName: "Jacob Thompson",
      avatar:
        "../../notifications-page-main/assets/images/avatar-jacob-thompson.webp",
      commentAction: "has join your group",
      commentMention: "Chess Club",
      isNew: true,
      isRead: false,
      isSelected: false,
      lastMessage: "1 day ago",
      haveImage: false,
      image: "",
      haveParagraph: false,
      paragraph: "",
    },
    {
      id: 4,
      userName: "Rizky Hasanuddin",
      avatar:
        "../../notifications-page-main/assets/images/avatar-rizky-hasanuddin.webp",
      commentAction: "has join your group",
      commentMention: "Chess Club",
      isNew: false,
      isRead: false,
      isSelected: false,
      lastMessage: "5 days ago",
      haveImage: false,
      image: "",
      haveParagraph: true,
      paragraph: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
      id: 5,
      userName: "Kimberly Smith",
      avatar:
        "../../notifications-page-main/assets/images/avatar-kimberly-smith.webp",
      commentAction: "commented on your picture",
      commentMention: "",
      isNew: false,
      isRead: true,
      isSelected: false,
      lastMessage: "1 week ago",
      haveImage: true,
      image: "../../notifications-page-main/assets/images/image-chess.webp",
      haveParagraph: false,
      paragraph: "",
    },
    {
      id: 6,
      userName: "Nathan Peterson",
      avatar:
        "../../notifications-page-main/assets/images/avatar-nathan-peterson.webp",
      commentAction: "reacted to your recent post",
      commentMention: "5 end-game strategies to increase your win rate",
      isNew: false,
      isRead: true,
      isSelected: false,
      lastMessage: "2 weeks ago",
      haveImage: false,
      image: "",
      haveParagraph: false,
      paragraph: "",
    },
    {
      id: 7,
      userName: "Anna Kim",
      avatar:
        "../../notifications-page-main/assets/images/avatar-anna-kim.webp",
      commentAction: "left the group",
      commentMention: "Chess Club",
      isNew: false,
      isRead: true,
      isSelected: false,
      lastMessage: "2 weeks ago",
      haveImage: false,
      image: "",
      haveParagraph: false,
      paragraph: "",
    },
  ];

  return comments;
};

export default db;
