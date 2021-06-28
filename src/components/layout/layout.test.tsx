import { render } from '@testing-library/react';
import { MainLayout as Layout} from './layout';


function setupLayout(props: any = {}) {
  const defaultProps = {
    navbar: <div>navbar</div>,
    body: <div>body</div>,
    className: '',
    id: 'test',
    ...props
  };

  const utils = render(<Layout {...defaultProps} />);

  return utils;
}

describe('layout component', () => {
  test('layout scholud have added elements', () => {
    const layout = setupLayout();

    expect(layout.getByText('navbar')).toBeInTheDocument();
    expect(layout.getByText('body')).toBeInTheDocument();
  })

  test('layout schould have additional class', () => {
    const layout = setupLayout({ className: 'added-class' });

    const element = layout.container.getElementsByClassName('added-class')[0];
    expect(element).toBeInTheDocument();
  })
})
