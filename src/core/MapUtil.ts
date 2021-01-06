import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import ol from 'ol'

export class MapUtil {
	constructor() {}

	/**
	 * @description
	 * @author zcj
	 * @static
	 * @param {} mapContainer
	 * @param {*} initOption
	 * @return {*}
	 * @memberof MapUtil
	 */
	static mapInit(mapContainer: any, initOption: any) {
		let map
		if (mapContainer) {
			map = new Map({
				target: mapContainer,
				layers: [
					new TileLayer({
						source: new OSM(),
					}),
				],
				view: new View({
					zoom: 14,
					center: [108.94, 34.34],
					projection: 'EPSG:4326',
				}),
			})
		}
		return map
	}
}
