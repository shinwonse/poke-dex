'use client';

import { ReactNode } from 'react';

import { Wrapper } from './styles';

type Props = {
  background?: string;
  children?: ReactNode;
};

function Card({ background, children }: Props) {
  return (
    <Wrapper background={(background && background) || ''}>{children}</Wrapper>
  );
}

Card.defaultProps = {
  background: '#424242',
  children: null,
};

export default Card;
