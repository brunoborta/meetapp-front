import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

function DatePicker({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        placeholderText={placeholder}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        dateFormat="d 'de' MMMM 'de' yyyy, 'às' HH:mm"
        timeCaption="time"
        locale={pt}
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

DatePicker.defaultProps = {
  placeholder: 'Data do meetup',
};

export default DatePicker;
