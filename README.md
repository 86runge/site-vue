# site

## Vue

### 生命周期钩子

1. beforeCreate: 创建前状态
2. created: 创建完毕状态
3. beforeMount: 挂载前状态
4. mounted: 挂载结束状态
5. beforeUpdate: 更新前状态
6. updated: 更新完成状态
7. beforeDestroy: 销毁前状态
8. destroyed: 销毁完成状态

## slot 分发内容

slot相当于子组件设置了一个地方，如果在调用它的时候，往它的开闭标签之间放了东西，那么它就把这些东西放到slot中。

1. 当子组件中没有slot时，父组件放在子组件标签内的东西将被丢弃；
2. 子组件的slot标签内可以放置内容，当父组件没有放置内容在子组件标签内时，slot中的内容会渲染出来；
3. 当父组件在子组件标签内放置了内容时，slot中的内容被丢弃

slot可以有很多个。那么子组件对于父组件放置的多余的内容如何放到各个slot中呢？方法就是子组件给每个slot起一个名字name，父组件放置多余的元素时，给每个元素的slot属性分配一个代表slot的名字。到时候，多余的内容就会根据自己的slot属性去找具有对应名字的slot元素。

1. 子组件可以有一个匿名的slot，当分发的多余内容找不到对应的slot时，就会进入这里面
2. 如果子组件没有匿名的slot，当分发的多余内容找不到对应的slot时，就会被丢弃

作用域插槽也是一个插槽slot，但是他可以把数据传递给到父组件的特定元素内，然后有父组件决定如何渲染这些数据。
