/**
 * 注册事件监听
 * event: 监听的事件
 * listener: 监听器（事件触发后执行的函数）
 * options（可选）:
 *   capture: Boolean。和 useCapture 一样
 *   once: Boolean. true 表示只会调用一次，之后会移除监听
 *   passive: 表示永远不会调用 preventDefault
 * useCapture（可选）: Boolean. 是指在DOM树中，注册了该listener的元素，是否会先于它下方的任何事件目标，接收到该事件，默认为false
 *  是否要捕获....
 */

target.addEventListenter(event, listener, [options], [useCapture])