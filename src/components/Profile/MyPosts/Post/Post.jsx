import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4b/4b30ad87357409ab79cfa6573f0c8a0e2d4d360c_full.jpg' />
      post 1
          <div>
        <span>like</span>
      </div>
    </div>
  )

}

export default Post;