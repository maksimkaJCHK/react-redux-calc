import * as React from 'react';
import { IHistoryItemsProps } from '../../types/history';

const HistoryItems = (props: IHistoryItemsProps) => {

  return (
    <>
      {
        props.items.length
          ? props.items.map(el => {
              let itemDate = new Date(Number(el.date));
              let year = itemDate.getFullYear();
              let buildMonth = itemDate.getMonth() + 1;
              let month = buildMonth < 10 ? '0' + buildMonth : buildMonth;
              let date = (itemDate.getDate() < 10) ? '0' + itemDate.getDate() : itemDate.getDate();
              let hours = (itemDate.getHours()) < 10 ? '0' + itemDate.getHours() : itemDate.getHours();
              let minutes = (itemDate.getMinutes() < 10) ? '0' + itemDate.getMinutes() : itemDate.getMinutes();
              let seconds = (itemDate.getSeconds() < 10) ? '0' + itemDate.getSeconds() : itemDate.getSeconds();
              let classN = `history-actions-item ${ el.error ? "alarm" :"" }`;

              return (
                <div className = { classN } key = { el.id }>
                  { el.error ? 'Данное действие не добавилось на сервер, так как он не доступен, нужно продлить доступ к базе данных на firebase, возможно у вас отсутствует подключение к интернету.' : '' }
                  <div>
                    <b>Дата:</b> { date } { month } { year } { hours }:{ minutes }:{ seconds }
                  </div>
                  <b>Действие:</b> { el.action }
                </div>
              )
            })
          : 'Нет данных для отображения'
      }
    </>
  )
}

export default HistoryItems;