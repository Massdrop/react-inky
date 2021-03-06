import { expect } from 'chai';
import getColumnClasses from '../getColumnClasses';

describe('getColumnClasses', () => {
  it('sets the value of small and large', () => {
    expect(getColumnClasses({})).to.equal('columns small-12 large-12')
  });

  it('allows default column count to be changed', () => {
    expect(getColumnClasses({}, 16)).to.equal('columns small-16 large-16')
  });

  it('sets the value of large', () => {
    expect(getColumnClasses({ large: 4 })).to.equal('columns small-12 large-4')
  });

  it('defaults large to the value of small', () => {
    expect(getColumnClasses({ small: 4 })).to.equal('columns small-4 large-4');
  });

  it('adds first class', () => {
    expect(getColumnClasses({ first: true })).to.equal('columns small-12 large-12 first');
  });

  it('adds last class', () => {
    expect(getColumnClasses({ last: true })).to.equal('columns small-12 large-12 last');
  });
});
