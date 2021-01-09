import TileLayer from 'ol/layer/Tile'
import XYZSource from 'ol/source/XYZ'
const googleLayer = (layerName) => {
	const url = getUrl(layerName)
	const layer = new TileLayer({
		source: new XYZSource({
			url: url,
		}),
	})
	layer.set('id', layerName)
}

const getUrl = (layerName,tk, code) => {
	let url
	let tilematrix
	code === '4326' ? (tilematrix = 'c') : (tilematrix = 'w')
	url =
		'http://t{0-7}.tianditu.gov.cn/' +
		layerName +
		'_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=' +
		layerName +
		'&STYLE=default&TILEMATRIXSET=' +
		tilematrix +
		'&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=d4a3ea97540bebbd2c400faaeed26986'
	return url
}


export default {
  getTDTLayer
}