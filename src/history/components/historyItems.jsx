import React from 'react';

const HistoryItems = (props) => {
  const monthArr = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  return (
    <>
      {
        props.items.length
          ? props.items.map(el => {
              let itemDate = new Date(Number(el.date));
              let year = itemDate.getFullYear();
              let buildMonth = monthArr[ itemDate.getMonth() ];
              let month = buildMonth < 10 ? '0' + buildMonth : buildMonth;
              let date = (itemDate.getDate() < 10) ? '0' + itemDate.getDate() : itemDate.getDate();
              let hours = (itemDate.getHours()) < 10 ? '0' + itemDate.getHours() : itemDate.getHours();
              let minutes = (itemDate.getMinutes() < 10) ? '0' + itemDate.getMinutes() : itemDate.getMinutes();
              let seconds = (itemDate.getSeconds() < 10) ? '0' + itemDate.getSeconds() : itemDate.getSeconds();
              let classN = `history-actions-item ${ el.error ? "alarm" : "" }`;

              return (
                <div className = { classN } key = { el.id }>
                  { el.error ? 'Данное действие не добавилось на сервер, так как он не доступен, нужно продлить доступ к базе данных на firebase, возможно у вас отсутствует подключение к интернету.' : '' }
                  <div>
                    <b>Дата:</b>
                    <span className="history-actions-item-time">{ hours }:{ minutes }:{ seconds }</span>
                    { date } { month } { year }
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