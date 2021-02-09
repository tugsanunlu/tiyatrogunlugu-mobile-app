const parseISODateTime = (dateTime) => {
  const months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ];
  const splittedDate = dateTime.split('T')[0].split('-');

  return `${splittedDate[2]} ${months[splittedDate[1] - 1]} ${splittedDate[0]}`;
};

export { parseISODateTime };
