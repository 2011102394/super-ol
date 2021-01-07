import { Map, View } from 'ol'
import { defaults } from 'ol/control'
import mapConfig from '../config/mapConfig'
export class MapUtil {
	constructor() {}

	/**
	 * @description map实例初始化
	 * @author zcj
	 * @param {MapInitParams} initParam
	 * @memberof MapUtil
	 */
	static init = (initParam) => {
		let map
		if (initParam.target) {
			map = new Map({
				target: initParam.target,
				pixelRatio: 1,
				controls: defaults(
					Object.assign(mapConfig.defaultControlConfig, initParam.controls)
				),
			})
		}
		return map
	}

	/**
	 * @description 设置view对象
	 * @author zcj
	 * @param {Map} map
	 * @param {ViewInitOption} viewOptions
	 * @memberof MapUtil
	 */
	static setView = (map, viewOptions) => {
		let view
		const options = Object.assign(mapConfig.defaultViewConfig, viewOptions)
		view = new View(options)
		map.setView(view)
	}
}

