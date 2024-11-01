import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Card, Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const MainPage = observer(() => {
  document.body.style.backgroundColor = "#313131"
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    number1: '',
    time: '',
    checkbox: '',
    checkbox1: ''
  });
  const [nameError, setNameError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [number1Error, setNumber1Error] = useState();
  const [timeError, setTimeError] = useState();
  const [checkboxError, setCheckboxError] = useState();
  
  useEffect(() => {
    if (formData.name === '' || formData.phone === '' || formData.number1 === '' || formData.time === '' || formData.checkbox === '') {
      return ;
    }
  });


  const Submit = (e) => {
    // Метод обьекта, для отмены действия браузера по умолчанию, связанного с определённым событием. Отменить переход по ссылке при клике на неё
    e.preventDefault();
    setNameError(formData.name === '');
    setPhoneError(formData.phone === '');
    setNumber1Error(formData.number1 === '');
    setTimeError(formData.time === '');
    setCheckboxError(formData.checkbox === '')}
    

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      [name]: type === 'checkbox' ? checked : value,
      [name]: type === 'checkbox1' ? checked : value,
    })};

  return (
    <Container
      style={{ backgroundColor: '#313131', borderRadius: '15px', width: '1240px', marginTop: '6px', fontFamily: "Play" }}>
      <Card style={{ borderRadius: 80, fontFamily: "Play", backgroundColor: '#3E3E3E', marginTop: '60px' }} className="p-5 #FFFAF4">
        <Form className="d-flex flex-column" onSubmit={Submit}>
          <Form.Control
            style={{ borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom: '20px' }}
            className="mt-3"
            type="name"
            placeholder="Введите имя..."
            size="lg"
            maxLength={8}
            onChange={(e) => setFormData({ name: e.target.value })} />
          {nameError && <p style={{ color: 'red' }}>Поле не может быть пустым</p>}
          <Form.Control
            style={{ borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom: '20px' }}
            className="mt-3"
            type="phone"
            minLength={5}
            placeholder="Выберите опцию..."
            size="lg"
            // Это обработчик изменения значения для поля телефона в форме. 
            // Он позволяет обновлять состояние formData при изменении значения этого поля.
            onChange={(e) => setFormData({ phone: e.target.value })} />
          {phoneError && <p style={{ color: 'red' }}>Поле не может быть пустым</p>}
          <Form.Control
            style={{ borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom: '20px' }}
            className="mt-3"
            placeholder="Введите число..."
            size="lg"
            type="number"
            onChange={(e) => setFormData({ number1: e.target.value })} />
          {number1Error && <p style={{ color: 'red' }}>Поле не может быть пустым</p>}
    
          <Form.Control
            style={{ borderRadius: 70, backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom: '20px', width:'340px'}}
            className="mt-3"
            type="time"
            placeholder="Выберите время..."
            size="lg"
            onChange={(e) => setFormData({ time: e.target.value })} />
          {timeError && <p style={{ color: 'red' }}>Вам нужно выбрать время</p>}

          <div style={{ borderRadius: 70, width:'340px', backgroundColor: '#7F933A', height: 71, border: "1px solid", fontSize: "24px", marginBottom: '20px' }}> 
                    <label> 
                        <strong style={{marginLeft:'40px'}}>Мультивыбор...</strong> 
                      <input
                      style={{width:'100px', height:'35px', marginTop: '15px'}}
                      type="checkbox" 
                      name="checkbox" 
                      checked={formData.checkbox} 
                      onChange={handleChange}/>
                  </label></div>
          {checkboxError && <p style={{ color: 'red' }}>Подумайте.. и выберите</p>}

          <p style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              size={"lg"}
              onChange={Submit}
              variant={"outline-success"}
              style={{ fontWeight: 'bold', borderRadius: 37, width: '180px', height: '70px' }}
            >
              Отправить
            </Button></p>
        </Form>
      </Card>

    </Container>
  );
}
);

export default MainPage;