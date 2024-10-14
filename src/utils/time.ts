export const getFormattedDate = (d: Date): string => {
  let options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return d.toLocaleDateString('en-US', options) + " @ " + d.toLocaleTimeString('en-US');
}