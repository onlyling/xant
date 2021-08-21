import type { ScrollViewProps } from 'react-native';

export interface PullRefreshProps extends Omit<ScrollViewProps, 'refreshControl'> {
  onRefresh: () => void | Promise<void>;
}
