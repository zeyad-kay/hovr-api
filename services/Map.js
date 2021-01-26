const { Client } = require('@googlemaps/google-maps-services-js')
const { defaultParamsSerializer } = require("@googlemaps/google-maps-services-js/dist/directions");

const client = new Client({});

class MapsService {
    static async route(params) {
        return client.directions({
            params: {
                key: process.env.API_KEY,
                optimize: true,
                ...params
            },
        })
            .then(res => res.data.routes[0]);
    }
    static sortWaypoints(waypoints, order) {
        let sorted_waypoints = [];
        order.forEach((index) => {
            sorted_waypoints.push(waypoints[index]);
        });
        return sorted_waypoints;
    }
    static createURL(params) {
        const encodedParams = defaultParamsSerializer(params);
        return `https://www.google.com/maps/dir/?api=1&travelmode=driving&${encodedParams}`;
    }
}

module.exports = MapsService;