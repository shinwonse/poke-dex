import Image from 'next/image';

import { Wrapper } from './styles';

function Card() {
  return (
    <Wrapper>
      <Image
        alt="Picture of the author"
        height={500}
        src="https://s3.amazonaws.com/my-bucket/profile.png"
        width={500}
      />
    </Wrapper>
  );
}

export default Card;
