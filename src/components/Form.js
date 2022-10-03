import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <div>
          <label htmlFor="name">
            Name
            <input type="text" name="name" data-testid="name-input" />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description
            <input type="textarea" name="description" data-testid="description-input" />
          </label>
        </div>
        <div>
          <label htmlFor="attr1">
            Attr1
            <input type="number" name="attr1" data-testid="attr1-input" />
          </label>
        </div>
        <div>
          <label htmlFor="attr2">
            Attr2
            <input type="number" name="attr2" data-testid="attr2-input" />
          </label>
        </div>
        <div>
          <label htmlFor="attr3">
            Attr3
            <input type="number" name="attr3" data-testid="attr3-input" />
          </label>
        </div>
        <div>
          <label htmlFor="image">
            Image
            <input type="text" name="image" data-testid="image-input" />
          </label>
        </div>
        <div>
          <label htmlFor="rare">
            <p name="rare">Rare</p>
            <select data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="trunfo">
            Super Trunfo
            <input type="checkbox" name="trunfo" data-testid="trunfo-input" />
          </label>
        </div>
        <div>
          <button type="button" data-testid="save-button">Salvar</button>
        </div>
      </div>
    );
  }
}

export default Form;
