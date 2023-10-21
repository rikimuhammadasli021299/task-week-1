const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

const callback = (keyword) => {
  return name.filter((name) => name.toLowerCase().includes(keyword.toString().toLowerCase()));
};

const searchName = (keyword, limit, callback) => {
  if (keyword) {
    const result = callback(keyword);
    if (result.length === 0) {
      console.log(`${keyword} not found!`);
    } else {
      limit > 0 ? console.log(result.slice(0, limit)) : console.log(result);
    }
  } else {
    console.log('Keywords is required!');
  }
};

searchName('riki', 0, callback);
