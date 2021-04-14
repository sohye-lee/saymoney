export const GetDate = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = String(date.getDate()).padStart(2, '0');
    const weekday = weekDays[date.getDay()];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    return `${weekday}, ${month} ${day}, ${year}`
}

