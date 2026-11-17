import { format, isToday, isTomorrow } from "date-fns";

export function formatDate(date: Date, formatString: string = "DD-MM-YYYY") {
  return format(date, formatString);
}

export function formatReminderDate(date: Date): string {
  const time = format(date, "HH:mm");

  if (isToday(date)) return `Today, ${time}`;
  if (isTomorrow(date)) return `Tomorrow, ${time}`;

  return `${format(date, "d MMM yyyy")}, ${time}`;
}
