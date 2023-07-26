import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { UIVariant } from '../../enums/UIVariant';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const WithoutOverlay: Story = {
  args: {
    variant: UIVariant.PRIMARY,
    text: 'Test without overlay',
    deletable: true,
  },
};

export const WithoutOverlayClickable: Story = {
  args: {
    variant: UIVariant.PRIMARY,
    text: 'Test without overlay clickable',
    deletable: true,
    onClickAction: {
      clickAction: () => {
        action('Badge.WithoutOverlayClickable.onClickAction')('Button was clicked!');
      },
    },
  },
};
export const WithOverlay: Story = {
  args: {
    variant: UIVariant.SECONDARY,
    text: 'Test with overlay',
    overlay: {
      text: 'overlay text <br/> other line',
    },
    deletable: true,
  },
};
export const WithoutOverlayDisabled: Story = {
  args: {
    variant: UIVariant.PRIMARY,
    text: 'Test disabled',
    deletable: true,
    disabled: true,
  },
};
