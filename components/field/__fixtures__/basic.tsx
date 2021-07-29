import React from 'react';

import { CellGroup, Field } from 'xant';

const BasicField: React.FC = () => {
  return (
    <>
      <CellGroup title="基础用法">
        <Field label="文本" placeholder="请输入内容" />
        <Field label="文本" labelAlign="right" placeholder="请输入内容" />
        <Field label="文本" labelAlign="center" placeholder="请输入内容" />
        <Field colon label="文本" placeholder="请输入内容" />
        <Field colon colonLabel="=>" label="文本" placeholder="请输入内容" />
        <Field colon colonLabel="=>" label="文本" placeholder="请输入内容" type="textarea" />
      </CellGroup>

      <CellGroup title="自定义类型">
        <Field label="文本" placeholder="请输入文本" />
        <Field label="整数" placeholder="请输入整数" type="digit" />
        <Field label="数字" placeholder="请输入数字(支持小数)" type="number" />
        <Field label="密码" placeholder="请输入密码" type="password" />
        <Field label="密码" placeholder="请输入密码" type="password" />
        <Field label="密码" placeholder="请输入密码" type="password" />
        <Field label="多行文本" placeholder="请输入内容" type="textarea" />
        <Field label="密码" placeholder="请输入密码" type="password" />
        <Field label="密码" placeholder="请输入密码" type="password" />
        <Field label="密码" placeholder="请输入密码" type="password" />
        <Field label="整数" placeholder="请输入整数" type="digit" />
      </CellGroup>
    </>
  );
};

export default BasicField;
