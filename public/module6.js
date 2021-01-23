const model = [
  {
      id: 0,
      title: 'Title text 1',
      text: 'Some text 1',
      user: {
          id: 0,
          name: 'user 1',
      },
  }, {
      id: 1,
      title: 'Title text 2',
      text: 'Some text 2',
      user: {
          id: 1,
          name: 'user 2',
      },
  }, {
      id: 2,
      title: 'Title text 3',
      text: 'Some text 3',
      user: {
          id: 0,
          name: 'user 1',
      },
  }, {
      id: 3,
      title: 'Title text 4',
      text: 'Some text 4',
      user: {
          id: 2,
          name: 'user 3',
      },
  }, {
      id: 4,
      title: 'Title text 5',
      text: 'Some text 5',
      user: {
          id: 0,
          name: 'user 1',
      },
  }
]

const changeObject = (arr) => {
  const users = [];
  const filtered = [];
  const result = new Array(filtered.length);
  const posts = new Array(filtered.length);

  arr.map((blog) => {
    users.push(blog.user.id);
    if (!filtered.includes(blog.user.id)) {
      filtered.push(blog.user.id);
    }
  });

  arr.map((blog) => {
    for (let i = 0; i < filtered.length; i++) {
      if (blog.user.id === filtered[i]) {
        posts[i] = {
          id: blog.id,
          title: blog.title,
          text: blog.text,
        }
        result[i] = {
          id: blog.user.id,
          name: blog.user.name,
          posts: posts[i],
        }
      }
    }
  });
  return result;
}

changeObject(model);