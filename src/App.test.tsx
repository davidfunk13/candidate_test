import React from 'react';
import { render, screen } from '@testing-library/react';
import { mount } from "enzyme"
import App from './App';
import { Provider } from 'react-redux'
import rootStore from "./rootStore"

describe("App.tsx", () => {
    it('renders learn react link', () => {
        const component = mount(<Provider store={rootStore}><App /></Provider>);
        expect(component).toHaveLength(1)
    });
})