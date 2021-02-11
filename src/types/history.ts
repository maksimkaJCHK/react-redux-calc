import actionsConst from '../store/const';

export interface TypeItemsHistory {
  id: string;
  date: string;
  error: boolean;
  action: string
}

export interface IHistoryReducer {
  load: boolean;
  error: boolean;
  items: TypeItemsHistory[];
}

export interface IHistoryItemsProps {
  items: TypeItemsHistory[]
}

export interface IAddHistory {
  type: actionsConst.ADD_HISTORY_ITEMS;
  error: boolean;
  payload: TypeItemsHistory[];
}

export interface IHistoryLoad {
  type: actionsConst.HISTORY_LOAD;
  payload: boolean;
}

export type IHistoryAction = IAddHistory | IHistoryLoad;

export interface IGetHistory {
  error: boolean;
  historyItems: TypeItemsHistory[]
}