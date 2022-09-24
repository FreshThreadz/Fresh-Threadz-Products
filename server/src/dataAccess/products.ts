import { connection } from './../database/postgres';
import * as I from '../Utilities/interfaces';
import * as format from '../Utilities/formatData';
import * as postgres from '../Utilities/queryStrings'
import { Transform } from 'stream';

export async function getProducts (page:string = '1', count:string = '5'):Promise<I.Product[]> {
  const { rows } : { rows:[] } = await connection.query(postgres.getProducts(page, count));
  return rows;
}

export async function getProductInfo (id:string='1'):Promise<I.ProductInfo> {
  const { rows:result } = await connection.query(postgres.getProductInfoSingle(id))
  return result[0].json_build_object;
}

export async function getProductStyles (id:string='1'):Promise<I.ProductStyles> {
  const { rows: result } = await connection.query(postgres.getStylesSingle(id));
  return result[0];
}

export async function getProductRelated (id:string='1'):Promise<string[]> {
  const { rows:result } : { rows:[] } = await connection.query(postgres.getProductRelated(id));
  const related = result.map((id:I.QueryRelated) =>  id.related_product_id );
  return related;
}

export async function getProductInfoTest (id:string='1'):Promise<I.ProductInfo> {
  const [resultInfo, resultFeatures] = await Promise.all([
    connection.query(postgres.getProductInfo(id)),
    connection.query(postgres.getProductFeatures(id))
  ])

  const [info] = resultInfo.rows;
  const features = resultFeatures.rows

  return {...info, features};
}

export async function getProductStylesTest (id:string='1'):Promise<I.ProductStyles> {
  const [resultSKUs, resultPhotos] = await Promise.all([
    connection.query(postgres.getStyleSKUsTest(id)),
    connection.query(postgres.getStylePhotosTest(id))
  ]);

  const result = format.Styles(resultSKUs.rows, resultPhotos.rows)
  return { "product_id": id, results: result };
}