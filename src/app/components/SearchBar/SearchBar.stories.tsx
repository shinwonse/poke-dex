import type { Meta, StoryObj } from '@storybook/react';

import SearchBar from './SearchBar';

export default {
  component: SearchBar,
} as Meta<typeof SearchBar>;

export const Default: StoryObj<typeof SearchBar> = {
  args: {
    color: '#000000',
  },
};
