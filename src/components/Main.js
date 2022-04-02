import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100%;
  background-image: url("https://www.elplural.com/uploads/s1/82/28/90/martin-luther-king-i-y-malcom-x-en-una-foto-de-archivo.jpeg");
`;

const Title = styled.h1`
  width: 100%;
  height: 3em;
  font-size: 3em;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;
const Intro = styled.h3`
  background-color: #e8e8e8;
  opacity: 0.7;
`;

const Frases = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Cards = styled.div`
  background-color: red;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  color: white;
  margin-top: 1%;
  border-radius: 0.5em;
  font-family: sans-serif;
`;
const Cardmlk = styled.div`
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  color: black;
  margin-top: 1%;
  border-radius: 0.5em;
  font-family: sans-serif;
`;

class Main extends Component {
  state = {
    frases: [
      {
        frasemx:
          "Nós não podemos pensar em nos unirmos com os outros até que sejamos primeiro unidos entre nós."
      },
      {
        frasemx:
          " Historicamente, os brancos sempre foram assim em relação aos pretos, podemos estar com eles, mas jamais fomos considerados iguais a eles."
      },
      {
        frasemx: "-Malcolm X"
      },
      {
        frasemlk:
          "Não tentemos satisfazer a sede de liberdade bebendo da taça da amargura e do ódio."
      },
      {
        frasemlk:
          "Aprendemos a voar como os pássaros e a nadar como os peixes, mas não aprendemos a conviver como irmãos."
      },
      {
        frasemlk: "-Martin Luther King Jr"
      }
    ]
  };

  render() {
    return (
      <Container>
        <Title> Malcolm X e Martin Luther King Jr</Title>
        <Intro>
          Uma das maiores influências do Movimento Black Power, o ativista
          Malcolm X viveu nos anos 60 na mesma época que Martin Luther King. O
          pastor Martin Luther King pregava discursos de igualdade e pensamentos
          pacíficos, enquanto Malcolm tinha discursos mais agressivos e defendia
          a ideia de que o fim da repressão do povo preto deveria ocorrer por
          todo meio necessário. Ambos contribuíram grandemente para a luta por
          direitos civis dos afro americanos e na mesma época, mas curiosamente
          o ativista político mais conhecido mundialmente é o que defendia uma
          luta pacífica contra o racismo. Ambos foram assassinados brutalmente.
        </Intro>
        <Frases>
          {this.state.frases.map((item) => (
            <Cards>
              <b>{item.frasemx}</b>
            </Cards>
          ))}
          ;
          {this.state.frases.map((item) => (
            <Cardmlk>
              <b>{item.frasemlk}</b>
            </Cardmlk>
          ))}
          ;
        </Frases>
      </Container>
    );
  }
}
export default Main;

//Uma das maiores influências do Movimento Black Power, o ativista Malcolm X viveu nos anos 60 na mesma época que Marthin Luther King. O pastor Martin Luther King pregava discursos de igualdade e pensamentos pacíficos, enquanto Malcolm tinha discursos mais agressivos e defendia a ideia de que o fim da repressão do povo preto deveria ocorrer por todo meio necessário. Ambos contribuíram grandemente para a luta por direitos civis dos afro-americanos e na mesma época, mas curiosamente o ativista político mais conhecido mundialmente é o que defendia uma luta pacífica contra o racismo. Ambos foram assassinados brutalmente.

//frases
