/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import TestComponent from './TestComponent.vue';

// eslint-disable-next-line no-undef
describe('TestComponent testing', () => {
  // eslint-disable-next-line no-undef
  test('Test content', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        message: 'Test message',
      },
    });
    expect(wrapper.text()).toEqual('Test message is {{ message }}');
  });
});
