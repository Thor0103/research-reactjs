import React from 'react';
import Layout from '../components/Layout';
import imgAvatar from '../assets/images/profile.jpg';
import imgPersonal from '../assets/images/avata.jpg';
import { css } from '@emotion/react';

const Profile = () => {
  const [like, setLike] = React.useState(false);
  const [disable, setDisable] = React.useState(false);

  const sum = (a, b) => {
    const s = a + b;
    console.log('sum: ', s);
  };

  return (
    <Layout>
      <div className="proflie">
        <div className="header-profile">
          <div className="header-profile_img">
            <img src={ imgAvatar } alt=""/>
            <div className="header-profile_edit">
              <p>Chỉnh sửa ảnh bìa</p>
            </div>
          </div>
          <div className="header-profile_friend">
            <div className="header-friend_left">
              <div className="header-left_border">
                <img src={ imgPersonal } alt=""/>
              </div>
            </div>
            <div className="header-fiend_mid">
              <h1>Khang Hoàng</h1>
              <p><span>876</span> Bạn bè</p>
              <div>
                Bạn bè
              </div>
            </div>
            <div className="header-friend_right">
              <div className="header-right_bt-add">
                <p>Thêm vào tin</p>
              </div>
              <div className="header-right_bt-edit">
                <p>Chỉnh sửa trang cá nhân</p>
              </div>
            </div>
          </div>
          <div className="header-profile_menu">
            <ul>
              <li>Bài viết</li>
              <li>Giới thiệu</li>
              <li>Bạn bè</li>
              <li>Ảnh</li>
              <li>Video</li>
              <li>Check in</li>
              <li>Xem thêm <span>&#8711;</span></li>
            </ul>
            <div className="header-menu_list">
              <span>...
               <div className="header-menu_list-hover">

              </div>
              </span>

            </div>
          </div>
        </div>
        <div className="content-profile">
          <div className="content-profile_left">
            <div className="content-profile_introduce">
              <h3>Giới thiệu</h3>
              <button>Thêm tiểu sử</button>
              <p>Từng học tại Thpt Tán Kế</p>
              <p>Từng học tại Thpt Tán Kế</p>
              <p>Từng học tại Thpt Tán Kế</p>
              <button>Chỉnh sửa chi tiết</button>
              <button>Thêm tiểu sử</button>
              <button>Thêm tiểu sử</button>
            </div>
          </div>
          <div className="content-profile_right">
            <div className="content-right_posts">
              <div className="content-post_header">
                <div className="content-post_header-left">
                </div>
                <div className="content-post_header-mid">
                  <div>
                    <p>Khang Hoàng <span>cùng với</span> Kha Lê</p>
                    <p className="content-post_header-mid-date">13 tháng 3, 2019</p>
                  </div>
                  <div>
                    <span>&#8901;&#8901;&#8901;</span>
                  </div>
                </div>

              </div>
              <div className="content-post_main">
                <p>T ước 2 thằng bây đánh đc 1/10 như vậy thôi. T gánh quài cũng mệt lắm chứ</p>
              </div>
              <div className="content-post_interaction">
                <ul>
                  <li>
                    <button css={ css`
                    ${ like ? 'color: blue' : 'color: #7e7a80' }
                    
                    ` } onClick={ () => setLike(!like) } type="button">Like
                    </button>
                  </li>
                  <li>
                    <button onClick={ () => setDisable(!disable) } type="button">Disable</button>
                  </li>
                  <li>
                    <button disabled={ disable }>Share</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;