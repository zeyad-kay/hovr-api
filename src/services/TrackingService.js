const { REDIS_URL } = require("../config");
// const { promisify } = require("util");
const redis = require("redis");
const client = redis.createClient(REDIS_URL);

class TrackingService {

    static async publishLocation(trip_id, location = {}) {
        const loc = JSON.stringify(location);
        client.publish(trip_id, loc, redis.print);
        client.rpush(trip_id, loc, redis.print);
    }

    static async subscribeToTrip(trip_id) {
        const subscriber = redis.createClient(REDIS_URL);
        return new Promise((resolve, reject) => {
            subscriber.subscribe(trip_id, () => {
                resolve(subscriber.subscription_set);
            });
        });
        // const promisified_subscribe = promisify(subscriber.subscribe).bind(subscriber);
        // return promisified_subscribe(trip_id)
        //     .then(() => subscriber);
    }
}

exports.TrackingService = TrackingService;