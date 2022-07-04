import {createStore } from 'redux';
import rootred from './Redux/reducers/main';

const store=createStore(
    rootred
)
export default store;

