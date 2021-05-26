const { GOOGLE_MAPS_API_KEY } = require("../config");
const { defaultParamsSerializer } = require("@googlemaps/google-maps-services-js/dist/directions");
const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

class MapService {
    static async getDirections(params) {
        return client.directions({
            params: {
                key: GOOGLE_MAPS_API_KEY,
                optimize: true,
                ...params
            },
        })
            .then(res => res.data.routes[0]);
    }
    static async getDistance() {
        return client.distancematrix({
            
        })
    }
    static createMapURL(params) {
        const encodedParams = defaultParamsSerializer(params);
        return `https://www.google.com/maps/dir/?api=1&travelmode=driving&${encodedParams}`;
    }
}

exports.MapService = MapService;