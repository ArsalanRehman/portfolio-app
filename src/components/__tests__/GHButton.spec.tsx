import React from 'react';
import { render } from '@testing-library/react';
import GHButton from '../GHButton';

describe('<GHButton />', () => {
  test('should render correctly', async () => {
    const { asFragment } = await render(
      <GHButton
        resource={{
          endpoint: 'https://api.github.com/users/ArsalanRehman',
          attr: 'followers',
        }}
        href="https://github.com/ArsalanRehman"
        title="Follow @ArsalanRehman on GitHub"
        text="Follow @ArsalanRehman on GitHub"
        icon={{
          prefix: 'fab',
          iconName: 'github',
        }}
        size="lg"
        showCount={true}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
