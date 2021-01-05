import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

export class MapUtil {
	constructor() {}

	/**
	 * 地图实例初始化
	 * @param {*} mapContainer 
	 */
	static mapInit(mapContainer) {
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
