import React, { usestate } from 'react';
<<<<<<< HEAD
import logo from '../images/mindcaptor_logo1.png';
=======
>>>>>>> 195d38f61e5c5e5fc27d684696cfee95e4fe93ec
import { Link, withRouter, useHistory } from 'react-router-dom';
import ProFile from './components/ProFile';
import SerchUser from './components/SerchUser';
import Header from './components/Header';
import './MyPages.css';

function MyPage() {
  const history = useHistory();
  return (
    <div>
<<<<<<< HEAD
      <header>
        <img src={logo} className="logo"></img>
        <span onClick={() => history.push('/Waiting')}>나가기</span>
      </header>

      <section>
        <buttton>편집</buttton>
        <div>프로필 사진 변경</div>
      </section>

      <section>
        <div>이메일로 유저 팔로잉</div>
        <input type="text" placeholder="유저 이메일"></input>
        <article>
          <div>팔로워</div>
          <ul>
            <li>유저</li>
          </ul>
        </article>
        <article>
          <div>팔로잉</div>
          <ul>
            <li>유저</li>
          </ul>
        </article>
      </section>
=======
      <Header />
      <ProFile />
      <SerchUser />
>>>>>>> 195d38f61e5c5e5fc27d684696cfee95e4fe93ec
    </div>
  );
}

export default withRouter(MyPage);
