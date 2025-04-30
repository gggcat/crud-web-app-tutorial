import React, { useState, useEffect } from "react";

// 日本語の曜日
const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

// 月の日付マトリクスを生成
function getMonthMatrix(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const matrix = [];
  let week = [];
  let day = 1 - firstDay.getDay();

  while (day <= lastDay.getDate()) {
    week = [];
    for (let i = 0; i < 7; i++, day++) {
      if (day < 1 || day > lastDay.getDate()) {
        week.push(null);
      } else {
        week.push(day);
      }
    }
    matrix.push(week);
  }
  return matrix;
}

export default function JPMonthlyCalendar() {
  // 現在の年月をステートで管理
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [holidays, setHolidays] = useState({});

  // 祝日データ取得
  useEffect(() => {
    fetch(`https://holidays-jp.github.io/api/v1/${year}/date.json`)
      .then(res => res.json())
      .then(setHolidays)
      .catch(() => setHolidays({}));
  }, [year]);

  // 前月・翌月へ移動
  const prevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };
  const nextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  const matrix = getMonthMatrix(year, month);

  return (
    <div className="max-w-md mx-auto bg-white rounded shadow p-4">
      {/* ヘッダー */}
      <div className="flex justify-between items-center mb-2">
        <button onClick={prevMonth} className="px-2 py-1 rounded hover:bg-gray-100">&lt;</button>
        <span className="text-lg font-bold">{year}年 {month + 1}月</span>
        <button onClick={nextMonth} className="px-2 py-1 rounded hover:bg-gray-100">&gt;</button>
      </div>
      {/* カレンダー本体 */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {WEEKDAYS.map((d, i) => (
              <th key={i} className={`py-1 ${i === 0 ? "text-red-500" : i === 6 ? "text-blue-500" : ""}`}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrix.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => {
                const dateStr = day
                  ? `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                  : "";
                const isHoliday = holidays[dateStr];
                const isToday =
                  day &&
                  year === today.getFullYear() &&
                  month === today.getMonth() &&
                  day === today.getDate();
                return (
                  <td
                    key={j}
                    className={`
                      h-14 w-14 text-center align-middle
                      border border-gray-100
                      ${j === 0 ? "text-red-500" : j === 6 ? "text-blue-500" : ""}
                      ${isHoliday ? "bg-red-100 font-bold" : ""}
                      ${isToday ? "ring-2 ring-indigo-400 rounded-full" : ""}
                    `}
                  >
                    {day && (
                      <div>
                        <span>{day}</span>
                        {isHoliday && (
                          <div className="text-xs text-red-600">{holidays[dateStr]}</div>
                        )}
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
