import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    attr1: 0,
    attr2: 0,
    attr3: 0,
    image: '',
    rare: 'normal',
    trunfo: false,
    buttonDisabled: true,
    cardList: [],
    hasTrunfo: false,
  };

  handleInputChange = (event) => {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;
    this.setState({
      [name]: value,
    }, () => this.btnValidator());
  };

  btnValidator = () => {
    const { name,
      description,
      attr1,
      attr2,
      attr3,
      image,
    } = this.state;

    const attr1Value = parseInt(attr1, 10);
    const attr2Value = parseInt(attr2, 10);
    const attr3Value = parseInt(attr3, 10);

    const maxAllValue = 210;
    const maxAttrValue = 90;

    const attr1Verify = (attr1Value >= 0 && attr1Value <= maxAttrValue);
    const attr2Verify = (attr2Value >= 0 && attr2Value <= maxAttrValue);
    const attr3Verify = (attr3Value >= 0 && attr3Value <= maxAttrValue);
    const allAttrVerify = (attr1Value + attr2Value + attr3Value <= maxAllValue);

    const textVerify = (name.length && description.length && image.length > 0);

    const allBtnValidations = !(attr1Verify
      && attr2Verify
      && attr3Verify
      && allAttrVerify
      && textVerify
    );
    this.setState({ buttonDisabled: allBtnValidations });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      hasTrunfo,
    } = this.state;

    const newCard = { name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      hasTrunfo,
    };
    this.setState((prevState) => ({
      cardList: [...prevState.cardList, newCard],
      name: '',
      description: '',
      image: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      rare: 'normal',
      trunfo: false,
      buttonDisabled: true,
    }), () => this.hasTrunfoVerify());
  };

  hasTrunfoVerify = () => {
    const { cardList } = this.state;
    cardList.some(
      (element) => element.trunfo === true,
      this.setState({ hasTrunfo: true }),
    );
  };

  render() {
    const { name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      buttonDisabled,
      hasTrunfo,
      cardList,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          isSaveButtonDisabled={ buttonDisabled }
          onInputChange={ this.handleInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
        <div>
          <h3>LISTA DE CARTAS</h3>
          <ul>
            {cardList.map((element, index) => (
              <li key={ index }>
                <Card
                  cardName={ element.name }
                  cardDescription={ element.description }
                  cardAttr1={ element.attr1 }
                  cardAttr2={ element.attr2 }
                  cardAttr3={ element.attr3 }
                  cardImage={ element.image }
                  cardRare={ element.rare }
                  cardTrunfo={ element.trunfo }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
