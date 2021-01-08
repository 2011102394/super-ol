import defaultBaseLayers from './config'
import mapUtil from '../core/mapUtil'

const createBaseLayerSwitch = (initParam) => {
	const { target, map, type, baseLayers } = initParam
	// 获取dom节点
	const container = document.getElementById(target)
	const ids = []
	baseLayers.forEach((item) => {
		ids.push(item)
	})
	baseLayers.forEach((item) => {
		const rowDom = document.createElement('div')
		rowDom.setAttribute(
			'style',
			'display:flex;flex-direction: column;margin-left: 8px;margin-left: 8px;height:56px'
		)
		const imgDom = document.createElement('img')
		imgDom.setAttribute('alt', item.displayName)
		imgDom.setAttribute('title', item.displayName)
		imgDom.setAttribute('src', item.avatar)
		rowDom.appendChild(imgDom)
		container.appendChild(rowDom)
		addBaseLayer(map,item)
		rowDom.addEventListener('click', function () {
			ids.forEach((id) => {
				const layer = mapUtil.findLayerById(map, id)
				console.log(layer)
				if (item === id) {
					layer.setVisiable(true)
				} else {
					layer.setVisiable(false)
				}
			})
		})
	})
}

const addBaseLayer = (map, layerOption) => {
	mapUtil.addLayer(map, layerOption, layerOption.type)
}

function switchLayer(map, item) {
	console.log(map)
	console.log(item)
	// ids.forEach((item) => {
	// 	const layer = mapUtil.findLayerById(map, id)
	// 	if (item === id) {
	// 		layer.setVisiable(true)
	// 	} else {
	// 		layer.setVisiable(false)
	// 	}
	// })
}

export default {
	createBaseLayerSwitch,
}
