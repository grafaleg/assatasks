import React from 'react';
import {render} from '@testing-library/react-native';
import List from './List';
import {useQuery} from '@tanstack/react-query';

jest.mock('@tanstack/react-query');

beforeEach(() => {
  jest.clearAllMocks();
  (useQuery as jest.Mock).mockReturnValue({
    isLoading: false,
    isError: false,
    data: [{name: 'Salvador Kuhlman', avatar: 'avatar.jpg'}],
  });
});

describe('List', () => {
  it('should render a loading indicator when data is being fetched', async () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });
    const {getByTestId} = render(<List />);

    const loadingElement = getByTestId('loadingIndicator');
    expect(loadingElement).toBeTruthy();
  });

  it('should render a list of contacts when data is fetched successfully', async () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: [{name: 'Salvador Kuhlman', avatar: 'avatar.jpg'}],
    });

    const {getByText} = render(<List />);

    const listElement = getByText('Salvador Kuhlman');
    expect(listElement).toBeTruthy();
  });

  it('should display the first letter of the contact name when there is no avatar', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: [{name: 'Salvador Kuhlman', avatar: null}],
    });

    const {getByText} = render(<List />);

    expect(getByText('S')).toBeTruthy();
  });

  it('should display an error message when there is an error fetching data', () => {
    const message = 'Error fetching data';

    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: true,
      error: {message},
    });

    const {getByText} = render(<List />);
    expect(getByText(message)).toBeTruthy();
  });
});
