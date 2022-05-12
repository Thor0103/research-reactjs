import React from 'react';
import { css } from '@emotion/react';

const Post = (props) => {

  const Check = () => {
    if (!props.show) {
      return null;
    }

    return (
      <div css className="content-post_interaction">
        <ul>
          <li>
            <button type="button">Like
            </button>
          </li>
          <li>
            <button type="button">Disable</button>
          </li>
          <li>
            <button>Share</button>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <>
      <div className="content-post_header">
        <div className="content-post_header-left">
        </div>
        <div className="content-post_header-mid">
          <div>
            <p>{ props.name1 } <span>cùng với</span> { props.name2 }</p>
            <p className="content-post_header-mid-date">{ props.date }</p>
          </div>
          <div>
            <span>&#8901;&#8901;&#8901;</span>
          </div>
        </div>

      </div>
      <div className="content-post_main">
        <p>{ props.content }</p>
      </div>
      <Check/>
    </>
  );
};


export default Post;