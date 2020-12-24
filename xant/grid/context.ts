import { createContext, Context } from 'react';

import { RowContextState } from './interface';

const RowContext: Context<RowContextState> = createContext({});

export default RowContext;
