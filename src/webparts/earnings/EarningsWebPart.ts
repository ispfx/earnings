import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { Earnings, IEarningsProps } from './components/Earnings';
import { Version } from '@microsoft/sp-core-library';
import * as React from 'react';
import * as ReactDom from 'react-dom';

export interface IEarnings {
  Title: string;
  EarningsQ1: number;
  EarningsQ2: number;
  EarningsQ3: number;
  EarningsQ4: number;
}

export interface IEarningsWebPartProps {
  earnings: IEarnings[];
}

export default class EarningsWebPart extends BaseClientSideWebPart<IEarningsWebPartProps> {
  // Selected earnings data
  private selectedEarnings: IEarnings;

  // Select new earnings data
  private onSelectEarnings = (earnings: IEarnings): void => {
    this.selectedEarnings = earnings;
    this.render();
  }

  public render(): void {
    const element: React.ReactElement<IEarningsProps> = React.createElement(Earnings, {
      earnings: this.properties.earnings,
      selectedEarnings: this.selectedEarnings,
      onSelectEarnings: this.onSelectEarnings,
    });
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
