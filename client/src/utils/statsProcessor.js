export const processRawMinutes = (minutes) => {
    const regex = /PT(\d+)M(\d+)\.\d+S/;
    const match = minutes.match(regex);
  
    if (match) {
      const minutes = match[1]
      const seconds = match[2]
      return `${minutes}:${seconds}`
    }

    return null
}