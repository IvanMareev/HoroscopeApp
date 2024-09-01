import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './ZodiacSign.module.css';
import { CustomDateInput } from '../CustomDateInput/CustomDateInput';
import { PredictModal } from '../PredictModal';
import { useLanguage } from '../../Providers/LanduageContext';


export interface ZodiacSignProps {
  name: string;
  nameEn: string;
  symbol: string;
  language: string;
}

export function ZodiacSign({ name, nameEn, symbol, language }: ZodiacSignProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [predictModalIsOpen, setPredictModalIsOpen] = useState(false);
  const [seletedDate, setSelectedDate] = useState("");
  const { translations } = useLanguage();
  const zodiacSignsList = translations.zodiacSignsList;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDateSelection = (date: Date) => {
    setSelectedDate(date.toDateString());
    setModalIsOpen(false);
    setPredictModalIsOpen(true);
  };

  const handleShortDateSelection = (date: string) => {
    setSelectedDate(date);
    setModalIsOpen(false);
    setPredictModalIsOpen(true);
  };

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className={styles.ZodiacSign} onClick={handleFlip}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.symbol}>{symbol}</p>
          <button className={styles.buttonPrediction}>{zodiacSignsList.buttonShowPrediction}</button>
        </div>

        <div className={styles.ZodiacSign} onClick={handleFlip}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.description}>{zodiacSignsList.selectDateForPrediction}</p>
          <div>
            <button className={styles.buttonDate} onClick={() => { handleShortDateSelection("today") }}>{zodiacSignsList.buttonToday}</button>
            <button className={styles.buttonDate} onClick={() => { handleShortDateSelection("tomorrow") }}>{zodiacSignsList.buttonTomorrow}</button>
            <button
              className={styles.buttonDate}
              onClick={() => {
                setModalIsOpen(true);
              }}
            >
              {zodiacSignsList.buttonCustomDate}
            </button>
          </div>
        </div>
      </ReactCardFlip>
      <CustomDateInput isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} onSelectDate={handleDateSelection} />
      {nameEn && <PredictModal
        isOpen={predictModalIsOpen}
        onRequestClose={() => setPredictModalIsOpen(false)}
        name={name}
        nameEn={nameEn}
        symbol={symbol}
        date={seletedDate}
        language={language} />}
    </>
  );
}
