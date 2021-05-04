import type { Context } from 'react';
import { createContext } from 'react';

import type { RowContextState } from './interface';

const RowContext: Context<RowContextState> = createContext({});

export default RowContext;
