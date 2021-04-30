import React, { useState } from 'react';
import Character1 from '../../images/Character1.png';
import Character2 from '../../images/Character2.png';
import Character3 from '../../images/Character3.png';
import Character4 from '../../images/Character4.png';

export default function ProfilePoto({ ChangeInputPoto }) {
  const PotoData = [Character1, Character2, Character3, Character4];
  const [InputPoto, SetInputPoto] = useState(Character1);

  const InputPotoHandler = (el) => {
    ChangeInputPoto(el);
  };
  return (
    <div className="ProfilePotos">
      {PotoData.map((el) => (
        <div>
          <img src={el} alt="프로필사진" />
          <div>
            <button onClick={InputPotoHandler(el)}>선택</button>
          </div>
        </div>
      ))}
    </div>
  );
}
