import { Map, View } from 'ol'
import { BaseLayersInitOption, ViewInitOption } from '../const/mapInitConst'

/**
 * @description 地图实例初识化
 * @author zcj
 * @param {(HTMLElement | string | undefined)} target  承载地图的dom元素
 * @param {BaseLayersInitOption} [baseLayersOptions] 底图的相关配置
 * @param {ViewInitOption} [viewInitOption] 视图的相关配置
 * @return {*} 返回一个openlayers的Map对象
 */
const mapInit = (
	target: HTMLElement | string | undefined,
	baseLayersOptions?: BaseLayersInitOption,
	viewInitOption?: ViewInitOption
) => {
	let map
	map = new Map({
		target,
		view: viewInit(viewInitOption),
		layers: baseLayersInit(baseLayersOptions),
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
	view = new View(viewOption)
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
