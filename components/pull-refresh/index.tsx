import React, { useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import type { PullRefreshProps } from './interface';
import usePersistFn from '../hooks/use-persist-fn';
import { isPromise } from '../helpers/typeof';

const PullRefresh: React.FC<PullRefreshProps> = ({ onRefresh, ...restProps }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefreshPersistFn = usePersistFn(() => {
    setRefreshing(true);

    const returnVal = onRefresh();
    if (isPromise(returnVal)) {
      returnVal.finally(() => {
        setRefreshing(false);
      });
    } else {
      setRefreshing(false);
    }
  });

  return <ScrollView {...restProps} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshPersistFn} />} />;
};

export default PullRefresh;
