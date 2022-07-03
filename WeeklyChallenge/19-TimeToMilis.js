const timeToMillis = ({ sec = 0, min = 0, hours = 0, days = 0 }) => {
    return sec * 1000 + min * 60 * 1000 + hours * 60 * 60 * 1000 + days * 24 * 60 * 60 * 1000
}

console.log(timeToMillis({ sec: 0, min: 0, hours: 0, days: 1 }));