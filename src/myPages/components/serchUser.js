import React, { useState } from 'react';

export default function serchUser() {
  return (
    <section className="follow">
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
  );
}
