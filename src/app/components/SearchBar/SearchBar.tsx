'use client';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Input, InputBox, Title, Wrapper } from './styles';

type Props = {
  color?: string;
};

function SearchBar({ color }: Props) {
  return (
    <Wrapper>
      <Title color={color}>Name or Number</Title>
      <InputBox>
        <Input />
        <Button>
          <FontAwesomeIcon
            color="#fff"
            icon={faMagnifyingGlass}
          />
        </Button>
      </InputBox>
    </Wrapper>
  );
}

SearchBar.defaultProps = {
  color: '',
};

export default SearchBar;
