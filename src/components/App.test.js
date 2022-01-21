// render properly to the dom
import  React from 'react'
import App from './App'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
const app = shallow(<App />);

it('renders correctly',()=>{
    expect(app).toMatchSnapshot();
})



it('init  the `state` with empty list of gift',()=>{
    expect(app.state().gifts).toEqual([]);
})

it('add  new gift to the `state` by clicking `add gift` btn',()=>{
    expect(app.find('.btn-add').simulate('click'));
    expect(app.state().gifts).toEqual([{id :1}]);
})

it('add  new gift to the rendered list when clicking to  `add gift` btn',()=>{
    expect(app.find('.btn-add').simulate('click'));
    expect(app.find('.gift-list').children().length).toEqual(2)
})

