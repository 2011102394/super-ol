import defaultBaseLayers from './config'
import mapUtil from '../core/mapUtil'

const createBaseLayerSwitch = (initParam) => {
	const { target, map, type, baseLayers } = initParam
	// 获取dom节点
	const container = document.getElementById(target)
	const ids = []
	baseLayers.forEach((item) => {
		ids.push(item.id)
	})
	baseLayers.forEach((item) => {
		const rowDom = document.createElement('div')
		rowDom.setAttribute(
			'style',
			'display:flex;flex-direction:column;margin-left: 8px;margin-left: 8px;height:56px;font-size:12px;'
		)
		const imgDom = document.createElement('img')
		imgDom.setAttribute('alt', item.displayName)
		imgDom.setAttribute('title', item.displayName)
		imgDom.setAttribute('src', item.avatar)
		rowDom.appendChild(imgDom)
		const titleDom = document.createElement('div')
		titleDom.textContent = item.displayName
		titleDom.setAttribute('style', 'text-align:center')
		container.appendChild(rowDom)
		rowDom.appendChild(titleDom)
		addBaseLayer(map, item)
		rowDom.addEventListener('click', function () {
			ids.forEach((id) => {
				const layer = mapUtil.findLayerById(map, id)
				if (item.id === id) {
					layer.setVisible(true)
				} else {
					layer.setVisible(false)
				}
			})
		})
	})
}

const addBaseLayer = (map, layerOption) => {
	mapUtil.addLayer(map, layerOption, layerOption.type)
}

export default {
	createBaseLayerSwitch,
}
