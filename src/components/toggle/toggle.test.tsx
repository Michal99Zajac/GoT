import { fireEvent, render } from '@testing-library/react';
import Toggle, { ToggleProps } from './toggle';


function setupToggle(props: any = {}) {
  let defaultValue = true;
  const defaultProps: ToggleProps = {
    defaultValue: defaultValue,
    onChange: () => !defaultValue,
    ...props
  }

  const utils = render(
    <Toggle {...defaultProps} />
  );

  return utils;
}

describe('toggle component', () => {
  test('toggle on start sholud have toggle-on class', () => {
    const utils = setupToggle();

    expect(utils.container.getElementsByClassName('toggle-on')[0]).toBeInTheDocument();
  })
  
  test('toggle sholud have toggle-off class after click', () => {
    const utils = setupToggle();

    const toggle = utils.container.getElementsByClassName('toggle')[0];

    fireEvent.click(toggle);

    expect(toggle.classList).not.toContain('toggle-on');
    expect(toggle.classList).toContain('toggle-off');
  })
})
