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

const replaceApostrophe = (text) => {
  return text.replace('&#8217;', "'");
};

export { parseISODateTime, replaceApostrophe };
