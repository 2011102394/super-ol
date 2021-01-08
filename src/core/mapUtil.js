import { Map, View } from 'ol'
import { defaults } from 'ol/control'
import mapConfig from '../config/mapConfig'
import TileWMS from 'ol/source/TileWMS'
import Tile from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
export class MapUtil {
	constructor() {}

	/**
	 * @description map实例初始化
	 * @author zcj
	 * @param initParam
	 * @memberof MapUtil
	 */
	static init(initParam) {
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
	 * @param  map
	 * @param  viewOptions
	 * @memberof MapUtil
	 */
	static setView(map, viewOptions) {
		const options = Object.assign(mapConfig.defaultViewConfig, viewOptions)
		const view = new View(options)
		map.setView(view)
	}

	/**
	 * @description 根据id查找图层
	 * @author zcj
	 * @param {*} map map实例
	 * @param {*} id  layer的id
	 * @memberof MapUtil
	 */
	static findLayerById(map, id) {
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

	/**
	 * @description 添加图层到地图中
	 * @author zcj
	 * @static
	 * @param {*} map 地图实例对象
	 * @param {*} param 服务参数
	 * @param {*} type 服务类型
	 * @memberof MapUtil
	 */
	static addLayer(map, param, type) {
		switch (type) {
			case 'WMS': {
				this.addWMSTileLayer(map, param)
				break
			}
			case 'XYZ': {
				this.addXYZLayer(map, param)
				break
			}
			default:
				return
		}
	}

	/**
	 * @description 添加WMS服务到地图中
	 * @author zcj
	 * @param {*} map 地图实例对象
	 * @param {*} param 服务参数
	 * @memberof MapUtil
	 */
	static addWMSTileLayer(map, param) {
		const { url, options, id } = param
		const wmsTileLayer = new Tile({
			visible: param.visible,
			source: new TileWMS({
				url,
				params: options,
			}),
		})
		id ? wmsTileLayer.set('id', id) : null
		map.addLayer(wmsTileLayer)
	}

	/**
	 * @description 添加XYZ图层到地图中
	 * @author zcj
	 * @param {*} map 地图实例对象
	 * @param {*} param 服务参数
	 * @memberof MapUtil
	 */
	static addXYZLayer(map, param) {
		const { url, id, visible } = param
		const xyzLayer = new Tile({
			visible,
			source: new XYZ({
				url,
			}),
		})
		id ? xyzLayer.set('id', id) : null
		map.addLayer(xyzLayer)
	}
}
