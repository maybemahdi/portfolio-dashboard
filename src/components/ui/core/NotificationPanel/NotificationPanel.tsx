// "use client";

// import {
//   useMarkAsReadAllNotificationMutation,
//   useMarkAsReadSingleNotificationMutation,
// } from "@/redux/features/notification/notification.api";
// import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
// import { getSocket } from "@/utils/socket";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function NotificationsPanel({
//   setIsNotificationOpen,
//   setAllNotifications,
//   allNotifications,
// }: {
//   setIsNotificationOpen: any;
//   setAllNotifications: any;
//   allNotifications: any;
// }) {
//   const router = useRouter();
//   const unreadCount = allNotifications.filter((n: any) => !n.isRead).length;
//   const [markAllAsRead] = useMarkAsReadAllNotificationMutation();
//   const [markSingleAsRead] = useMarkAsReadSingleNotificationMutation();

//   const socket = getSocket();

//   useEffect(() => {
//     if (socket) {
//       socket.on("notification", (data) => {
//         setAllNotifications((prev: any[]) => [...prev, data]);
//       });
//     }

//     return () => {
//       if (socket) {
//         socket.off("notification");
//       }
//     };
//   }, [socket]);

//   const handleMarkAllAsRead = async () => {
//     const response = await handleAsyncWithToast(async () => {
//       return markAllAsRead({ isRead: true });
//     });
//     if (response?.data?.success) {
//       setIsNotificationOpen(false);
//     }
//   };

//   const handleClick = async (notification: any) => {
//     router.push(notification?.link);
//     await handleAsyncWithToast(async () => {
//       return markSingleAsRead({ notId: notification?.id, isRead: true });
//     });
//     setIsNotificationOpen(false);
//   };

//   return (
//     <div className="w-64 md:w-80 bg-white h-full max-h-[350px] md:max-h-[450px]   rounded-lg shadow-lg border border-gray-100">
//       {/* Header Section */}
//       <div className="flex items-center justify-between px-4 border-b border-gray-100">
//         <div className="flex items-center gap-2">
//           <h2 className="font-medium">Notifications</h2>
//           <span className="text-sm text-gray-500">
//             ({String(unreadCount).padStart(2, "0")})
//           </span>
//         </div>
//         <button
//           onClick={handleMarkAllAsRead}
//           className="text-sm text-gray-500 hover:text-gray-700"
//         >
//           Mark all as read
//         </button>
//       </div>

//       {/* Notifications List */}
//       <div className="divide-y divide-gray-100 h-full max-h-[240px] md:max-h-[380px] slim-scroll overflow-hidden overflow-y-auto  z-50">
//         {allNotifications.length > 0 ? (
//           [...allNotifications]
//             ?.sort(
//               (a: any, b: any) =>
//                 new Date(b.createdAt).getTime() -
//                 new Date(a.createdAt).getTime()
//             )
//             ?.map((notification: any, idx: number) => (
//               <div
//                 key={idx}
//                 onClick={() => handleClick(notification)}
//                 className="flex items-start gap-3 p-4 hover:bg-gray-50 cursor-pointer"
//               >
//                 {/* Notification Icon */}
//                 {/* <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                 <FiUser className="w-4 h-4 text-gray-600" />
//               </div> */}

//                 {/* Notification Content */}
//                 <div className="flex-1 min-w-0">
//                   <p className="text-sm text-gray-700 underline">
//                     {notification.message}
//                   </p>
//                 </div>

//                 {/* Unread Indicator */}
//                 {!notification.isRead && (
//                   <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
//                 )}
//               </div>
//             ))
//         ) : (
//           <p className="text-center py-4 text-gray-500">No notifications</p>
//         )}
//       </div>
//     </div>
//   );
// }
