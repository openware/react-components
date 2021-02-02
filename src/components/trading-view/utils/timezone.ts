export const stdTimezoneOffset = (date: Date) => {
    const jan = new Date(date.getFullYear(), 0, 1);
    const jul = new Date(date.getFullYear(), 6, 1);

    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
};
