# Modal

1.类型断言

```tsx
// 解释：location.state 是 location 对象的 state 属性，类型是 any，
// 所以需要使用类型断言将其断言为 { backgroundLocation?: Location } 类型。可能包含backgroundLocation的Location对象。
let state = location.state as { backgroundLocation?: Location };
```

2.useRef

React.useRef 是 React 中的一个 Hook，用于创建一个可变的引用对象。这个引用对象在整个组件的生命周期中保持不变，即使组件重新渲染，ref 对象也不会改变。ref 对象的 .current 属性可以用来存储任何值，包括 DOM 节点、函数、对象等

```tsx
// 解释：useRef 创建一个 ref 对象，类型为 HTMLDivElement，初始值为 null。
const ref = useRef<HTMLDivElement>(null);
```

3.宽高比 aspectRatio(aspect-ratio)

```tsx
// 解释：aspect-ratio 是 CSS 中的一个属性，用于设置元素的宽高比。aspect-ratio: 16 / 9;
aspect-ratio: <ratio>;
```
