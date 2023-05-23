export const processRawMinutes = (minutes) => {
    const regex = /PT(\d+)M(\d+)\.\d+S/;
    const match = minutes.match(regex);
  
    if (match) {
      const minutes = parseInt(match[1], 10);
      const seconds = parseInt(match[2], 10);
      return `${minutes}:${seconds}`
    }

    return null
}