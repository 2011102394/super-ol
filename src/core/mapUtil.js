import { Map, View } from 'ol'
import { defaults } from 'ol/control'
import mapConfig from '../config/mapConfig'
export class MapUtil {
	constructor() {}

	/**
	 * @description map实例初始化
	 * @author zcj
	 * @param initParam
	 * @memberof MapUtil
	 */
	static init(initParam) {
		var map
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
	 * @param  map
	 * @param  viewOptions
	 * @memberof MapUtil
	 */
	static setView(map, viewOptions) {
		var view
		var options = Object.assign(mapConfig.defaultViewConfig, viewOptions)
		view = new View(options)
		map.setView(view)
	}


	/**
	 * @description 根据id查找图层
	 * @author zcj
	 * @param {*} map map实例
	 * @param {*} id  layer的id
	 * @memberof MapUtil
	 */
	findLayerById = (map, id) => {
		const layerArray = map.getLayers().array_
		let layer
		if (layerArray.length > 0) {
			layerArray.forEach((item) => {
				if (item.values_.id === id) {
					layer = item
				}
			})
		}
		return layer
	}
}
