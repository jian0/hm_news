export const datefilter = (time, spe) => {
  time = new Date(time)
  spe = spe || '/'
  let year = (time.getFullYear()).toString().padStart(2, '0')
  let month = (time.getMonth() + 1).toString().padStart(2, '0')
  let day = (time.getDate()).toString().padStart(2, '0')
  let hours = (time.getHours()).toString().padStart(2, '0')
  let minutes = (time.getMinutes()).toString().padStart(2, '0')
  let seconds = (time.getSeconds()).toString().padStart(2, '0')
  return `${year}${spe}${month}${spe}${day}  ${hours}:${minutes}:${seconds}`
}
