import type { Meta, StoryObj } from '@storybook/react';
import App from '../App';

const meta = {
  component: App,
  title: 'App',
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
