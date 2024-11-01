import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Card, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const MainPage = observer(() => {
  document.body.style.backgroundColor = "#808080"
  const predictions = [
    {
      title: 'Большая удача',
      health: 'В ближайший месяц ожидается прилив сил.',
      business: 'Скоро все вопросы с незаконченными делами решатся, и вы получите возможность сосредоточиться на прибыльном проекте.',
      relationships: 'Близкие и друзья будут очень нуждаться в вашей поддержке, и вы её окажете.'
    },
    {
      title: 'Неудача',
      health: 'Возможно, вам стоит обратить внимание на своё здоровье и не игнорировать симптомы.',
      business: 'Некоторые проекты могут оказаться невыгодными, будьте осторожны с инвестициями.',
      relationships: 'Конфликты с близкими могут возникнуть, постарайтесь быть терпимее.'
    },
    {
      title: 'Здоровье пострадает',
      health: 'Придется походить по врачам',
      business: 'Вам на утро придет позитивная новость',
      relationships: 'Остануться как есть'
    },
    {
      title: 'Переживёте всё',
      health: 'Но всё закончится прекрасно, как дальше жить вам будет ясно!',
      business: 'У тебя много личных талантов, которые нравятся другим',
      relationships: 'Вас ждет немало приятных и запоминающихся моментов'
    },
    {
      title: 'Спокойствия и только',
      health: 'Если тачку — то крутую, если денег — то зеленых.',
      business: 'Плывите по течению жизни без оценок и попыток понять ее.',
      relationships: 'Ваши романтические мечты сбудутся!'
    },
    {
      title: 'Победа за вами',
      health: 'Пусть в жизни все проходит мимо, кроме здоровья, денег!',
      business: 'Ваша цель достижима.',
      relationships: 'Дом будет самым уютным местом'
    },
    {
      title: 'Мотивация',
      health: 'Самое смешное желание — это нравиться всем',
      business: 'Вы много добьетесь, если возьмете все в свои руки',
      relationships: 'Ждите необычного признания в любви'
    },
    {
      title: 'Сосредоточится',
      health: 'Не стоит тратить время и силы на мелочи, нужно думать о главном.',
      business: 'Не оставляйте усилий и получите желаемое',
      relationships: 'Романтика переместит вас в новом направлении.'
    }
];
    const [isCardVisible, setCardVisible] = useState(false);

  const [prediction2, setPrediction2] = useState('');
  const [prediction, setPrediction] = useState('');
  const [buttonText, setButtonText] = useState("Вытянуть предсказание");
  const [disabled, setDisabled] = useState(false);

  const Click = () => {
    
    if (buttonText === "Вытянуть предсказание") {
      if(setPrediction === '') {
        const randomIndex = Math.floor(Math.random() * predictions.length);
        setPrediction(predictions[randomIndex]);
      }
      else {
        setPrediction2()
        const randomIndex = Math.floor(Math.random() * predictions.length);
        setPrediction(prev => ({ ...predictions[randomIndex], prevPrediction: prev }));

        setButtonText("Уже достаточно");
      }
    } else if (buttonText === "Ещё один шанс") {

        const randomIndex = Math.floor(Math.random() * predictions.length);
        setPrediction(prev => ({ ...predictions[randomIndex], prevPrediction: prev }));

        setButtonText("Уже достаточно");
        setDisabled(true);
    }
    setCardVisible(!isCardVisible);
};


  return (
    <Container
      style={{ backgroundColor: '#808080', borderRadius: '15px', width: '1000px', marginTop: '6px', fontFamily: "Play" }}>
            <Button
              type="submit"
              size={"lg"}
              onClick={Click}
              variant={"btn btn-danger"}
              disabled={disabled}
              style={{ fontWeight: 'bold', borderRadius: 10, width: '180px', height: '80px', display:'flex', justifyContent:'center'}}>
                {buttonText}
            </Button>

      {prediction && (
        <Card style={{ borderRadius: 40, fontFamily: "Play", backgroundColor: '#D3D3D3', marginTop: '60px', border:'3px solid' }} className="p-5 #FFFAF4 text-center">
            <h1 style={{fontWeight:'bold', textDecoration:'underline'}}>{prediction.title}</h1>
            <Card.Body>
              <Card.Text><p style={{fontWeight:'bold'}}>Здоровье:</p> {prediction.health}</Card.Text>
              <hr />
              <Card.Text><p style={{fontWeight:'bold'}}>Бизнес:</p> {prediction.business}</Card.Text>
              <hr />
              <Card.Text><p style={{fontWeight:'bold'}}>Отношения:</p> {prediction.relationships}</Card.Text>
            </Card.Body>
          </Card>
      )}

    {prediction2 && (
        <Card style={{ borderRadius: 40, fontFamily: "Play", backgroundColor: '#D3D3D3', marginTop: '60px', border:'3px solid' }} className="p-5 #FFFAF4 text-center">
            <h1 style={{fontWeight:'bold', textDecoration:'underline'}}>{prediction.title}</h1>
            <Card.Body>
              <Card.Text><p style={{fontWeight:'bold'}}>Здоровье:</p> {prediction.health}</Card.Text>
              <hr />
              <Card.Text><p style={{fontWeight:'bold'}}>Бизнес:</p> {prediction.business}</Card.Text>
              <hr />
              <Card.Text><p style={{fontWeight:'bold'}}>Отношения:</p> {prediction.relationships}</Card.Text>
            </Card.Body>
          </Card>
      )}
    </Container>
  );
}
);

export default MainPage;