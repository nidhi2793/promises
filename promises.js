const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];
const user = { usename: "Nidhi", lastaActivityTime: "19th june" };

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      resolve();
    }, 2000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastaActivityTime = new Date().getTime();
      resolve(user.lastaActivityTime);
    }, 1000);
  });
}
Promise.all([
  createPost({ title: "Post Five", body: "This is Post Five" }),
  updateLastUserActivityTime(),
]).then((lastaActivityTime) => console.log(lastaActivityTime));
