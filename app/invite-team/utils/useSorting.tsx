type Member = {
  fullName: string;
  email: string;
  role: string;
  status: string;
};

import { useState } from 'react';

export const useSorting = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortField, setSortField] = useState<keyof Member>('fullName');

  const handleSort = (field: keyof Member) => {
    setSortField(field);
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  return { sortOrder, sortField, handleSort };
};
