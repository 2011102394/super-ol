import TileLayer from 'ol/layer/Tile'
import XYZSource from 'ol/source/XYZ'
const getGoogleLayer = (layerName) => {
	const url = ''
	const layer = new TileLayer({
		source: new XYZSource({
			url: url,
		}),
	})
	layer.set('id', layerName)
}




export default {
  getGoogleLayer
}