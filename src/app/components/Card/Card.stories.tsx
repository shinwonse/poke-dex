import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';

import Card from './Card';

export default {
  component: Card,
} as Meta<typeof Card>;

export const PokemonCard: StoryObj<typeof Card> = {
  args: {
    children: (
      <Image
        alt="Bulbasaur"
        height={300}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
        width={300}
      />
    ),
  },
};
