export function formatContacsOrder(arr: any[]) {
  const directory = {} as any;
  arr.forEach((item) => {
    const name = item.name;
    const firstLetter = name.charAt(0).toUpperCase();

    if (!directory[firstLetter]) {
      directory[firstLetter] = [];
    }

    directory[firstLetter].push(item);
  });
  const sortedKeys = Object.keys(directory).sort();
  const sortedDirectory = {} as any;
  sortedKeys.forEach((key) => {
    sortedDirectory[key] = directory[key];
  });

  return sortedDirectory;
}

export function formatPhoneNumber(phoneNumber: string): string {
  phoneNumber = phoneNumber.replace(/\D/g, '');

  if (phoneNumber.length >= 10) {
    const localDigits = phoneNumber.substring(0, phoneNumber.length - 9);
    const phoneNumberDigits = phoneNumber.substring(phoneNumber.length - 9);
    return `(${localDigits}) 9 ${phoneNumberDigits.substring(
      0,
      4
    )}-${phoneNumberDigits.substring(4)}`;
  } else {
    return phoneNumber;
  }
}
