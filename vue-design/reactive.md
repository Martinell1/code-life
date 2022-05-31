# Vue的响应式系统

## 响应式系统

- 副作用函数

- 响应式数据的基本实现

  - 劫持get和set
  - track和trigger
  - 维持对象-字段-副作用函数的映射关系

- 分支切换与cleanup

  - 副作用函数维持一个deps数组用于存储与之关联的依赖集合
  - 副作用函数执行前清楚deps数组

- 解决副作用函数嵌套问题

  - 使用effectStack解决

- 避免无限递归循环

  - 读取和设置操作在同一个副作用函数内执行

- 调度执行

  - 副作用函数根调度器执行

- 计算属性

  - 接受getter
  - lazy选项
  - 缓存和dirty
  - 嵌套计算属性问题

- watch

  - 递归读取source值

  - 通过调度器执行回调

  - 返回新旧值

  - 立即执行

  - 回调时机

  - 过期的副作用

    

## 非原始值的响应式方案

- Proxy和Reflect

- 代理对象

  - 访问属性
    - 通过get拦截
  - in操作
    - 通过has拦截
  - 使用for...in遍历对象
    - 通过ownKyes拦截
    - 与迭代遍历相关的key用ITERATE_KEY作为标识
    - 操作类型为ADD或者DELETE时执行trigger
  - 合理触发响应
    - 检测值是否发生变化
    - 屏蔽由于在原型上访问引起的更新
  - 其他
    - 深响应与浅响应
    - 只读和浅只读

- 代理数组

  - 通过索引访问
    - 判断操作是ADD还是SET
  - 访问数组长度
    - 执行索引大于新length的副作用函数
  - 使用for...in遍历
    - 数组的遍历使用length而不是ITERATE_KEY作为key
  - 使用for...of迭代
    - 副作用函数与length建立联系即可实现响应式迭代
    - 因此屏蔽使用【Symbol.iterator】与副作用函数建立联系
  - 数组的原型方法
    - 数组的查找方法
      - 使用reactiveMap存储原始对象到代理对象的映射
      - 重写数组的查找方法
    - 修改数组长度的方法
      - 屏蔽对length的读取

- 代理Map和Set

  - 修改访问器中的this指向

  - 建立响应式联系

    - 在get中拦截对象中的方法

  - 避免污染原始数据

    - 根据set的key判断是ADD还是SET
    - 避免把响应数据设置到原始数据上

  - 处理forEach

    - 使用ITERATE_KEY作为key
    - forEach的参数也应该是响应式的
    - Map类型的forEach循环中SET操作应引起trigger

  - 迭代器方法

    - 代理对象上没有迭代器属性，应使用原始对象

    - 迭代产生的值也应是响应式的

    - 返回值应实现可迭代协议【Symbol.iterator】

    - Map.keys()使用MAP_KEY_ITERATE_KEY作为追踪的键

      

## 原始值的响应式方案

- 使用ref对原始值进行包装

- 解决扩展运算符中响应丢失的问题

  - 使用toRefs解决

- 在模板中自动脱ref

  - 使用proxyRefs代理拦截

  

  

  

  

  

  

  

  