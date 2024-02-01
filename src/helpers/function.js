export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatDate(inputDate) {
  const date = new Date(inputDate);

  const formatedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  return formatedDate;
}

export function getReversedDate(inputDate) {
  const dateArray = inputDate.split("-")

  const reversedDate = `${dateArray[2]+'-'+dateArray[1]+'-'+dateArray[0]}`

  return reversedDate;
}
