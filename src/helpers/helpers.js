//формат часы:минуты
export function formatNewsDate(dateStr) {
    const dateObj = new Date(dateStr);
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  //первая заглавная буква, но можно было проще
  export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//формат день.месяц.год часы:минуты
export function formatNewsDateYear(dateStr) {
    const dateObj = new Date(dateStr);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  
    return `${day}.${month}.${year}  ${hours}:${minutes}`;
  }