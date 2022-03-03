import { mount } from '@vue/test-utils';
import Calc from '../components/Calc.vue';

describe('Calculator testing', () => {
  it('Test first operand', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]'); // aka querySelector('input[name=op1]')
    // op1Input.element.value = 1;
    // op1Input.trigger('input');

    op1Input.setValue(1);

    expect(wrapper.vm.op1).toBe(1);
  });

  it('Test second operand', () => {
    const wrapper = mount(Calc);
    const op2Input = wrapper.find('input[name=op2]');

    op2Input.setValue(2);

    expect(wrapper.vm.op2).toBe(2);
  });

  it('Test sum method', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]');
    const op2Input = wrapper.find('input[name=op2]');
    const sumButton = wrapper.find('button[name="+"]');

    op1Input.setValue(1);
    op2Input.setValue(2);
    sumButton.trigger('click');

    expect(wrapper.vm.result).toBe(3);
  });

  it('Test div method', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]');
    const op2Input = wrapper.find('input[name=op2]');
    const Button = wrapper.find('button[name="/"]');

    op1Input.setValue(6);
    op2Input.setValue(4);
    Button.trigger('click');

    expect(wrapper.vm.result).toBe(1.5);
  });
  it('Test mult method', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]');
    const op2Input = wrapper.find('input[name=op2]');
    const Button = wrapper.find('button[name="*"]');

    op1Input.setValue(4);
    op2Input.setValue(2);
    Button.trigger('click');

    expect(wrapper.vm.result).toBe(8);
  });
  it('Test pow method', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]');
    const op2Input = wrapper.find('input[name=op2]');
    const Button = wrapper.find('button[name="*"]');

    op1Input.setValue(4);
    op2Input.setValue(2);
    Button.trigger('click');
    expect(wrapper.vm.result).toBe(8);
  });
  it('Test intDiv method', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]');
    const op2Input = wrapper.find('input[name=op2]');
    const Button = wrapper.find('button[name="//"]');

    op1Input.setValue(4);
    op2Input.setValue(3);
    Button.trigger('click');
    expect(wrapper.vm.result).toBe(1);
  });
  it('Test keyboard for operand1', () => {
    const wrapper = mount(Calc);
    const picked1 = wrapper.find('input[name=picked1]');
    const KeyboardButton = wrapper.find('button[name="5"]');

    picked1.trigger('click');
    KeyboardButton.trigger('click');
    expect(wrapper.vm.op1).toBe(5);
  });
  it('Test keyboard for operand2', () => {
    const wrapper = mount(Calc);
    const picked2 = wrapper.find('input[name=picked2]');
    const KeyboardButton = wrapper.find('button[name="5"]');

    picked2.trigger('click');
    KeyboardButton.trigger('click');
    expect(wrapper.vm.op1).toBe(5);
  });
  it('Test keyboard delete btn', () => {
    const wrapper = mount(Calc);
    const picked1 = wrapper.find('input[name=picked1]');
    const op1Input = wrapper.find('input[name=op1]');
    const KeyboardButton = wrapper.find('button[name="<-"]');

    op1Input.setValue(43);
    picked1.trigger('click');
    KeyboardButton.trigger('click');
    expect(wrapper.vm.op1).toBe(4);
  });
});
