import React, { useEffect } from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

import stl from '../sign/SignForm.module.css';


export default function DateInput(props) {
  const [startDate, setStartDate] = useState("");
  const [viewDate, setViewDate] = useState(new Date());
  const { dateOnChange } = props;

  useEffect(() => {
    dateOnChange(startDate);
  }, [startDate])
  
    return (
        <DatePicker
          onChange={(e) => {
            setStartDate(e.toISOString().split('.')[0]);
            setViewDate(e)
          }}
          className={stl.signTextInput}
          selected={viewDate}
          timeInputLabel="Time:"
          dateFormat="yyyy-MM-dd HH:mm"
          showTimeSelect
          minDate={new Date()}
          locale={ko}
        />
      );
}

