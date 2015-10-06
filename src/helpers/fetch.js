import model from './user_model';

export function fetch(url, data) {
  let api = {
    '/api/user': model,
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(api[url]);
    }, Math.floor(Math.random() * 200 + 100));
  });
}
