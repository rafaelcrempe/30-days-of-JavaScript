const now = new Date();

const pad = (value) => String(value).padStart(2, '0')

const year = now.getFullYear()
const month = pad(now.getMonth() + 1)
const day = pad(now.getDate())
const hour = pad(now.getHours())
const minute = pad(now.getMinutes())

const readableTime = `${year}-${month}-${day} ${hour}:${minute}`

console.log(readableTime);
