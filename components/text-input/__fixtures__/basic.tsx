import React, { useState } from 'react';

import { Cell, CellGroup, TextInput } from 'xant';

const BasicTextInput: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <CellGroup title="基础用法">
        <Cell title="text" value={<TextInput showBorder placeholder="不限制输入ABC" addonAfter="哈哈哈" addonBefore="AAA" />} />

        <Cell title="number" value={<TextInput type="number" placeholder="数字和小数点" />} />

        <Cell title="digit" value={<TextInput type="digit" placeholder="数字" textAlign="right" />} />

        <Cell title="password" value={<TextInput type="password" placeholder="内容不可见" keyboardAppearance="dark" />} />

        <Cell title="textarea" value={<TextInput showBorder showWordLimit maxLength={120} type="textarea" placeholder="多行文本" />} />

        <Cell title="clearTrigger" value={<TextInput clearable clearTrigger="always" placeholder="单行文本" />} />

        <Cell title="clearTrigger2" value={<TextInput clearable placeholder="单行文本" />} />

        <Cell
          title="受控使用"
          value={
            <TextInput
              showBorder
              type="digit"
              placeholder="受控使用"
              value={value}
              onChangeText={(t) => {
                if (+t > 100) {
                  t = '100';
                }

                setValue(t);
              }}
            />
          }
        />
      </CellGroup>
    </>
  );
};

export default BasicTextInput;
