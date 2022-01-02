import React from 'react';
import { mount } from '@cypress/react';
import FancyModal from './FancyModal';

it('renders modal', () => {
  mount(<FancyModal />);
  cy.get('h1').contains('Fancy Modal Header');
});

export {};