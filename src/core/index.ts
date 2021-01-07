import { Map, View } from 'ol'
import { BaseLayersInitOption, ViewInitOption } from '../const/mapInitConst'
import mapConfig from '../config/mapConfig'

/**
 * @description 地图实例初识化
 * @author zcj
 * @param {(HTMLElement | string | undefined)} target  承载地图的dom元素
 * @param {ViewInitOption} [viewInitOption] 视图的相关配置
 * @param {BaseLayersInitOption} [baseLayersOptions] 底图的相关配置
 * @return {*} 返回一个openlayers的Map对象
 */
const mapInit = (
	target: HTMLElement | string | undefined,
	viewInitOption?: ViewInitOption,
	baseLayersOptions?: BaseLayersInitOption
) => {
	let map
	map = new Map({
		target,
		layers: baseLayersInit(baseLayersOptions),
		view: viewInit(viewInitOption),
	})
	return map
}

/**
 * @description
 * @author zcj
 * @param {(ViewInitOption | undefined)} viewOption
 * @return {*}
 */
const viewInit = (viewOption: ViewInitOption | undefined) => {
	let view
	view = new View(Object.assign(mapConfig.defaultViewConfig,viewOption))
	return view
}

const baseLayersInit = (
	baseLayersOptions: BaseLayersInitOption | undefined
) => {
	let baseLayers
	return baseLayers
}
export const core = {
	mapInit,
}
