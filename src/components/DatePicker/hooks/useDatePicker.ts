import { useState } from 'react';

export const useDatePicker = () => {
  const [newDate, setNewDate] = useState<Date | null>(null);

  const onChangeDate = (newValue: Date | null) => {
    setNewDate(newValue);
  };

  return {
    data: { newDate },
    actions: { onChangeDate },
  };
};
