import TileLayer from 'ol/layer/Tile'
import XYZSource from 'ol/source/XYZ'



/**
 * @description 生成指定的天地图图层
 * @author zcj
 * @param {*} layerName
 * @param {*} tk
 * @param {*} code
 * @return {*} 
 */
const getTDTLayer = (layerName, tk, code) => {
	const url = getUrl(layerName, tk, code)
	const layer = new TileLayer({
		source: new XYZSource({
			url: url,
		}),
	})
  layer.set('id', layerName)
  return layer 
}

/**
 * @description 生成天地图url
 * @author zcj
 * @param {string} layerName 天地图的id：矢量底图 vec  矢量标记 cva   影像底图 img  影像标记  cia   地形晕眩  ter  地形标记  cta
 * @param {string} tk  天地图密钥
 * @param {number} code 经纬度投影  4326 球面墨卡托投影 3857
 * @return {string} 生成的天地图服务url
 */
const getUrl = (layerName, tk, code) => {
	let url
	let tilematrix
	code === 4326 ? (tilematrix = 'c') : (tilematrix = 'w')
	url =
		'http://t{0-7}.tianditu.gov.cn/' +
		layerName +
		'_' +
		tilematrix +
		'/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=' +
		layerName +
		'&STYLE=default&TILEMATRIXSET=' +
		tilematrix +
		'&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=' +
		tk
	return url
}

export default {
	getTDTLayer,
}
