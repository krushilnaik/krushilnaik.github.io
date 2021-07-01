import { useContext } from 'react';
import { PageContext } from '../utils/js/contexts';

export const usePage = () => useContext(PageContext);
