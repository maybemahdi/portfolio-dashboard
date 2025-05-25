// "use client";

// import { getSocket } from "@/utils/socket";
// import React, { useEffect, useState } from "react";

// const NotificationHandler = () => {
//   const socket = getSocket();

//   const [notifications, setNotifications] = useState<any>(null);

//   const { data } = useGetNotificationsQuery();

//   useEffect(() => {
//     if (data) {
//       setNotifications(data?.data);
//     }
//   }, [data]);

//   useEffect(() => {
//     if (socket) {
//       socket.on("notification", (data) => { // just 1 ta object asbe
//         setNotifications([...notifications, data]);
//       });
//     }

//     return () => {
//       if (socket) {
//         socket.off("notification");
//       }
//     };
//   }, [socket]);

//   return <div></div>;
// };

// export default NotificationHandler;
