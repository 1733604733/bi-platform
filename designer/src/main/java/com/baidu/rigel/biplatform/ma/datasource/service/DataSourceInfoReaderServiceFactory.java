package com.baidu.rigel.biplatform.ma.datasource.service;

import com.baidu.rigel.biplatform.ma.datasource.service.impl.RelationDBInfoReaderServiceImpl;
import com.baidu.rigel.biplatform.ma.ds.exception.DataSourceOperationException;
import com.baidu.rigel.biplatform.ma.model.ds.DataSourceType;
/**
 * 数据源信息读取服务DataSourceInfoReader的实例化工厂类
 * @author jiangyichao
 *
 */
public class DataSourceInfoReaderServiceFactory {
	public static DataSourceInfoReaderService getDataSourceInfoReaderServiceInstance(
			DataSourceType dataDourceType) throws DataSourceOperationException {
		switch(dataDourceType) {
			// 关系数据库
			case MYSQL:
			case MYSQL_DBPROXY:
			case H2:
			case ORACLE:
				return new RelationDBInfoReaderServiceImpl();
			// 列式数据库
			case COL_DATABASE:
				break;
			// EXCEL文件
			case EXCEL:
			// CSV文件
			case CSV:
			// TXT文件
			case TXT:
			// HDFS文件系统
			case HDFS:
			// 未支持数据源
			default:
				throw new DataSourceOperationException("unknow datasource type:"
	                    + dataDourceType);
		}
		return null;
	}
}
