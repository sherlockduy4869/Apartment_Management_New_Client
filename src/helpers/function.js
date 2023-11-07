export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatDate(inputDate) {
  const dateArray = inputDate.split("-");

  const formatedDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;

  return formatedDate;
}
