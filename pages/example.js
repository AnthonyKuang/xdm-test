/* @jsxRuntime automatic @jsxImportSource react */
import {
  Fragment as _Fragment,
  jsx as _jsx,
  jsxs as _jsxs,
} from 'react/jsx-runtime';

export const Thing = () => _jsx(_Fragment, { children: 'World!' });

function MDXContent(props = {}) {
  const _components = Object.assign({ h1: 'h1' }, props.components);
  const { wrapper: MDXLayout } = _components;
  const _content = _jsx(_Fragment, {
    children: _jsxs(_components.h1, {
      children: ['Hello, ', _jsx(Thing, {})],
    }),
  });
  return MDXLayout
    ? _jsx(MDXLayout, Object.assign({}, props, { children: _content }))
    : _content;
}

export default MDXContent;
