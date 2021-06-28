import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react';
import { Textfield, Select, Radio, TextfieldProps } from './input';


function setupTextfiled(props: any = {}) {
  const defaultProps = {
    value: '',
    onChange: () => {},
    ...props
  };

  const utils = render(<Textfield {...defaultProps} />);

  return utils;
}

function setupSelect(props: any = {}) {
  const defaultProps = {
    value: '',
    onChange: () => {},
    name: '',
    options: [],
    ...props
  };

  const utils = render(<Select {...defaultProps} />);

  return utils;
}

function setupRadio(props: any = {}) {
  const defaultProps = {
    value: '',
    onChange: () => {},
    name: '',
    options: [],
    ...props
  };

  const utils = render(<Radio {...defaultProps} />);

  return utils;
}

describe('Textfield component', () => {
  test('label should exists', () => {
    const utils = setupTextfiled({ label: 'label' });

    expect(utils.getByText('label')).toBeInTheDocument();
  })

  test('label should doesnt exist', () => {
    setupTextfiled();
    const label = screen.queryByText('label');

    expect(label).not.toBeInTheDocument();
  })

  test('input schould changed value', () => {
    let value = '';
    const onChange = (e: any) => { value = e.target.value };

    const utils = setupTextfiled({ value: value, onChange: onChange, placeholder: 'placeholder'});
    const input = utils.getByPlaceholderText('placeholder');
    fireEvent.change(input, { target: { value: 'new value' }});

    expect(value).toBe('new value')
  })

  test('input schould react on keyup', () => {
    let value = '';
    const onKeyUp = (e: any) => { value = '$' }

    const utils = setupTextfiled({
      value: value,
      placeholder: 'placeholder',
      onKeyUp: onKeyUp
    });
    const input = utils.getByPlaceholderText('placeholder');
    fireEvent.keyUp(input, { target: { value: 'new value' }});
    expect(value).toBe('$');
  })
})

describe('select component', () => {
  test('select label schould exist', () => {
    const utils = setupSelect({ label: 'label' });
    const label = utils.getByText('label');
    expect(label).toBeInTheDocument();
  })

  test('select label shouldnt display', () => {
    setupSelect();
    const label = screen.queryByText('label')
    expect(label).not.toBeInTheDocument();
  })

  test('select after first click should display options', () => {
    const utils = setupSelect({ value: 'button' });
    const button = utils.getByText('button');

    // click
    fireEvent.click(button);

    const list = button.getElementsByClassName('optionsHide')[0];

    expect(list).not.toBeDefined();
  })

  test('select after click option schould change value', () => {
    let value = 'any';
    const onChange = (e: any) => { value = e.target.value };

    const utils = setupSelect({ value: value, onChange: onChange, name: 'test', options: [
      { id: '1', value: 'any' },
      { id: '2', value: 'other' }
    ]});

    fireEvent.click(utils.getByLabelText(value));
    fireEvent.click(utils.getByText('other'));

    expect(value).toBe('other');
  })
})

describe('radio component',() => {
  test('radio should be set if the value is the same as one of the options', () => {
    const value = 'any';
    const utils = setupRadio({ value: value, name: 'test', options: [
      { id: '1', value: 'any' },
      { id: '2', value: 'other' }
    ]})

    const input = utils.getByLabelText('any');

    if (input instanceof HTMLInputElement)
      expect(input.checked).toBe(true);
  })
})
