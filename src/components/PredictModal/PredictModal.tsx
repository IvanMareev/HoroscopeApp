import  { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './PredictModal.module.css';
import { useLanguage } from '../../Providers/LanduageContext';

export interface PredictModalProps {
  onRequestClose: () => void;
  isOpen: boolean;
  prop?: string;
  symbol: string;
  name: string;
  nameEn?: string;
  date: string;
  language?: string;
}

Modal.setAppElement('#root');

export function PredictModal({ isOpen, nameEn, onRequestClose, date, name, symbol}: PredictModalProps) {
  const { translations } = useLanguage();
  const modalPrediction = translations.modalPrediction.yourPredictionFor;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formatPredict] = useState<string>('');
  // let prediction;
  // prediction = useHoroscopeFetcher();


  useEffect(() => {
    const fetchPrediction = async () => {
      // setIsLoading(true);
      

      // if (nameEn && nameEn !== "ENG") {
        // prediction = useHoroscopeFetcher("original", nameEn, date);
      // } else {
      // }

      // let formattedPrediction = prediction.replace(/\"/g, "").replace(/\\n/g, "<br />");
      // setFormatPredict(formattedPrediction);
      setIsLoading(false);
    };

    fetchPrediction();
  }, [nameEn, name, date]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={styles.modal}
      >
        <div className={styles.PredictModal}>
          <button className={styles.closeButton} onClick={onRequestClose}>
            &times;
          </button>

          <h1>
            {modalPrediction} <span>{date}</span>
          </h1>
          <span className={styles.symbol}>{symbol}</span>
          <span>{name}</span>

          {isLoading ? (
            <div className={styles.loader}>Loading...</div>  
          ) : (
            <div className={styles.text} dangerouslySetInnerHTML={{ __html: formatPredict }}></div>
          )}
        </div>
      </Modal>
    </>
  );
}
