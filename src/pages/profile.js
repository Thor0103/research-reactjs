import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import imgAvatar from '../assets/images/profile.jpg';
import imgPersonal from '../assets/images/avata.jpg';
import { css } from '@emotion/react';
import Info from '../components/Info';
import Post from '../components/Post';

const Profile = () => {
  const [like, setLike] = React.useState(0);
  const [status, setStatus] = React.useState(false);
  const [scrol, setCrol] = React.useState(false);
  let date = new Date();
  let day = date.getFullYear();
  let content = 'Tương tự, ta sẽ sử dụng những hàm liên quan đến giờ phút giây để lấy trong đối tượng date.';

  React.useEffect(() => {
    console.log('useEffect 1');
  }, [like]);

  useEffect(() => {
    const handleSrol = () => {
      setCrol(window.innerWidth < 600);
      console.log ('Scrol: ', scrol);
    }

    window.addEventListener('resize',handleSrol);

    return () => {
      window.removeEventListener('resize', handleSrol);
    }
  },[]);

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
              <Info name="Thormetal" like={ like }/>
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
              <button onClick={ () => setStatus(!status) } type="button">Xem them...</button>
              <Post name1="Khang" name2="Kha" date={ day } content={ content } show={ status }/>
              <div className="content-post_comment">
                <div className="content-comment_left">
                </div>
                <div className="content-comment_right">
                  <input placeholder="Viết bình luận..." type="text"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        scrol && (
          <button css={css`
            position: fixed;
            right: 0;
            bottom: 20px;
          `}>Xem them</button>
        )
      }
    </Layout>
  );
};

export default Profile;