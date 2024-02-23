/** A publisher publishes contents to a topic and interested subscribers access these contents by sending
 * subscriptions to the PubSubEvent to subscribe to that topic.
 * 
 * User [ PubSubEvent.getInstance() ] static method to get the existing instance without creating a new one,
 * This method is used to subscribe to same topic from different places with destroying the presence reference
 */
class PubSubEvent {
    /**Adding '#' before a variable inside a class will declare it as private variable */
    #subscriptionMap: Map<String, Array<(event: string, ...arg: any) => void>>;

    constructor() {
        this.#subscriptionMap = new Map<String, Array<(event: string, ...arg: any) => void>>();
    }

    /** Subscribe to the custom events ["topics"]
     * * Make sure to dispose the subscription after usage, otherwise it will subscribe multiple times,
     * and may cause unexpected behaviour.
     * @example
     * import { useEffect } from 'react';
     * import { pubsub } from 'common-util-kit';
     * 
     * useEffect(() => {
     *      const subscription = pubsub.subscribe("event", (event, ...args) => {});
     *      
     *      return () => {
     *          subscription.unsubscribe();
     *      }
     * }, []);
    */
    subscribe(event: string, func: (event: string, ...arg: any) => void) {
        (this.#subscriptionMap.get(event))
            ? this.#subscriptionMap.get(event)!.push(func)
            : this.#subscriptionMap.set(event, [func]);

        return {
            /** To unsbscribe from the created event */
            unSubscribe: () => {
                const funcs: Array<(event: string, ...arg: any) => void> | undefined = this.#subscriptionMap.get(event);
                if (funcs) {
                    const _index = funcs.indexOf(func);
                    (_index > -1) && funcs.splice(_index, 1);
                }
            }
        }
    }

    /**
     * Publish to the custom events ["topics"]
     * @example
     * import { pubsub } from 'common-util-kit';
     * pubsub.publish("event", ...args);
     */
    publish(event: string, ...args: any) {
        const funcArray: Array<(event: string, ...arg: any) => void> | undefined = this.#subscriptionMap.get(event);
        (Array.isArray(funcArray)) && funcArray.forEach(func => func(event, ...args))
    }
}

export const pubsub = new PubSubEvent();