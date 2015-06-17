var options = {
  url: 'https://api.github.com/users/username',
  method: 'GET',
  params: {
    page: 1,
    limit: 100
  }
};


var {
  url,
  method,
  params
} = options;

console.log(`URL is ${url} and the method is ${method}`);


function get({url, method}) {
  console.log(`URL is ${url} and the method is ${method}`);
}

get(options);
