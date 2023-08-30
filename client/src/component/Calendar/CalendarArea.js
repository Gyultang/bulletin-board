import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { CalendarDiv, CalendarBox } from "../../Style/CalendarCSS";
import "react-calendar/dist/Calendar.css";

const CalendarArea = () => {
    const [value, onChange] = useState(new Date());
    return (
        <CalendarDiv>
            <CalendarBox>
                <Calendar onChange={onChange} value={value} formatDay={(locale, date) => moment(date).format("DD")} />
                <div className="text-gray-500 mt-4">{moment(value).format("YYYY년 MM월 DD일")}</div>
            </CalendarBox>
        </CalendarDiv>
    );
};

export default CalendarArea;
