import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import styles from './CustomDateInput.module.css';
import { useLanguage } from '../../Providers/LanduageContext';

export interface CustomDateInputProps{
  isOpen: boolean;
  onRequestClose: () => void;
  onSelectDate: (date: Date) => void;
}

export function CustomDateInput({
  isOpen,
  onRequestClose,
  onSelectDate,
}: CustomDateInputProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const {translations} = useLanguage();
  const zodiacSignsList = translations.zodiacSignsList;

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      onSelectDate(date);
    }
    handleConfirm();
  };

  const handleConfirm = () => {
    if (selectedDate) {
      onRequestClose();
    }
  };

  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>{zodiacSignsList.selectDateForPrediction}</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          className={styles.datePicker}
          placeholderText={zodiacSignsList.selectDateForPrediction}
        />
      </div>
    </Modal>
  );
}
