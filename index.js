/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-12-11 22:37:23
 * @LastEditTime: 2021-12-11 22:45:45
 * @LastEditors: Lewis
 */
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
