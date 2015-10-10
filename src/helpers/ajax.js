import model from './user_model';

export function ajax(url, data) {
  let api = {
    '/api/user': model,
    '/api/remove': { success: true },
  };

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(api[url]);
    }, Math.floor(Math.random() * 200 + 100));
  });

  return promise;
}
