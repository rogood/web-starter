import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CollectionList } from './';

export default {
  title: 'Collection List',
  component: CollectionList,
} as ComponentMeta<typeof CollectionList>;

const Template: ComponentStory<typeof CollectionList> = (args) => <CollectionList {...args} />;

export const Default = Template.bind({});
Default.args = {};
