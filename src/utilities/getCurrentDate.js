export const getCurrentDate = () => {
    const date = new Date(),
        localeDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        localeTime = date.toLocaleTimeString('en-US', { hour12: false, timeZone: 'EST' }),
        year = date.getFullYear(),
        modifiedDate = localeDate + ' ' + localeTime + ' EST ' + year;

    return modifiedDate;
}