let data = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
};

// SOAL A
data = {
  ...data,
  name: 'Riki Muhammad Nurhidayat',
  email: 'rikimuhammadasli@gmail.com',
  hobby: ['riding', 'gaming', 'coding'],
};

console.log(data);

// SOAL B
const {
  address: { street, city },
} = data;

console.log(`${street}, ${city}`);
