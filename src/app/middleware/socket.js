/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-02-23 23:31:17
 * @LastEditTime: 2022-03-05 23:52:58
 * @LastEditors: Lewis
 */
const getOnComment = (socket) => {
  const date = new Date();
  socket.on("comment", (data) => {
    console.log("data", data);
    socket.broadcast.emit("comment", data);
  });
};

module.exports = { getOnComment };
