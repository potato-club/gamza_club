import axios from 'axios';

export const getTest1 = async () => {
  try {
    const res = await axios.get('https://koreanjson.com/users');
    return res.data;
  } catch (err) {
    console.log('getTest1 error!');
  }
};
