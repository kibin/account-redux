import model from './user_model';

export function ajax(url, data = {}) {
  let response = { success: true };

  switch (url) {
    case '/api/user': response = model; break;
    case '/api/remove': response = R.merge({ removed: data.skus }, response); break;
    case '/api/add_to_basket': response = R.merge({ added: data.skus }, response); break;
  }

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response);
    }, Math.floor(Math.random() * 300 + 100));
  });

  return promise;
}
