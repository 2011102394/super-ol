/** @type {*} 地图配置*/
const mapConfig = {
	/** 默认view配置 */
	defaultViewConfig: {
		center: [108.94, 34.34],
		projection: 'EPSG:4326',
		zoom: 8,
		maxZoom: 18,
		minZoom: 5,
  },
  /** 默认控件设置 */
	defaultControlConfig: {
		zoom: false,
		attribution: false,
	},
}

export default mapConfig
