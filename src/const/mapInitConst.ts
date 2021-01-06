import Projection from 'ol/proj/Projection'

/**
 * @description 底图初始化配置
 * @author zcj
 * @interface LayersInitOption
 */
interface BaseLayersInitOption {}

/**
 * @description 视图初识化配置
 * @author zcj
 * @interface ViewInitOption
 */
interface ViewInitOption {
	/**
	 * @description 视图缩放的zoom级别
	 * @author zcj
	 * @type {(number | undefined)}
	 * @memberof ViewInitOption
	 */
	zoom?: number | undefined

	/**
	 * @description 视图坐标系，默认web墨卡托（EPSG:3857）
	 * @author zcj
	 * @type {(string | Projection | undefined)}
	 * @memberof ViewInitOption
	 */
	projection?: string | Projection | undefined

  
	/**
   * @description 视图中心点
   * @author zcj
   * @type {(number[] | undefined)}
   * @memberof ViewInitOption
   */
  center?: number[] | undefined
}

export { BaseLayersInitOption, ViewInitOption }
