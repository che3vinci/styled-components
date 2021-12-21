/* eslint-disable no-console */
/**
 * @jest-environment jsdom
 */
import { resetStyled } from './utils';

let styled: ReturnType<typeof resetStyled>;

describe('basic', () => {
  /**
   * Make sure the setup is the same for every test
   */
  beforeEach(() => {
    styled = resetStyled();
  });

  it('should not inject anything by default', () => {
    // eslint-disable-next-line no-unused-expressions
    const c = styled.span`
      display: flex;
      height: ${props => props.theme.height};
    `;
    // console.log(c);
    c.defaultProps = { a: 2 };
    // expect(getRenderedCSS()).toMatchInlineSnapshot(`""`);
  });
});
