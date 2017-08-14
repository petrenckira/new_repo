/**
 * Created by Iryna_Petrenko1 on 7/28/2017.
 */
export default class EventBus {
  constructor() {
    this.topics = {};
    if (instance) {
      return instance;
    }
    instance = this;
  }

  subscribe(topic, listener) {

    if (!this.topics[topic]) this.topics[topic] = [];
    this.topics[topic].push(listener);

  }

  publish(topic, data) {
    if (!this.topics[topic] || this.topics[topic].length < 1) return;
    console.log("i am publish");

    this.topics[topic].forEach(function (listener) {
      listener(data || {});
    });

  }

  unsubscribe(topic) {
    delete this.topics[name];
  }
}
let instance = null;
