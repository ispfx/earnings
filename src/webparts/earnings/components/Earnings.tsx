import { IEarnings } from '../EarningsWebPart';
import * as React from 'react';
import styles from './Earnings.module.scss';

export interface IEarningsProps {
  earnings: IEarnings[];
  selectedEarnings: IEarnings;
  onSelectEarnings: (earnings: IEarnings) => void;
}

export class Earnings extends React.Component<IEarningsProps, {}> {
  public render(): React.ReactElement<IEarningsProps> {
    return (
      <div className={styles.earnings}>
        <ul>
          {this.props.earnings.map((earnings, i) => (
            <li key={i} className={`${this.props.selectedEarnings && this.props.selectedEarnings.Title == earnings.Title ? styles.selected : ''}`}>
              <button onClick={e => this.props.onSelectEarnings(earnings)}>
                <h3>{earnings.Title}</h3>
                <p><span>Q1:</span> ${earnings.EarningsQ1}</p>
                <p><span>Q2:</span> ${earnings.EarningsQ2}</p>
                <p><span>Q3:</span> ${earnings.EarningsQ3}</p>
                <p><span>Q4:</span> ${earnings.EarningsQ4}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
