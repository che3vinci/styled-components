import domElements from '../../utils/domElements';
import styled from '../styled';

describe('styled', () => {
  it('should have all valid HTML5 elements defined as properties', () => {
    domElements.forEach(domElement => {
      expect(styled[domElement]).toBeTruthy();
    });
  });
});
