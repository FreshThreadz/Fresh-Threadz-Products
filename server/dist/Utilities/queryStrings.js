"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductInfoSingle = exports.getStylesSingle = exports.getStylePhotosTest = exports.getStyleSKUsTest = exports.getProductRelated = exports.getProductFeatures = exports.getProductInfo = exports.getProducts = void 0;
const getProducts = (page, count) => `
  SELECT
    *
  FROM
    product_info
  WHERE
    product_id
  BETWEEN
      ${(Number(page) - 1) * Number(count) + 1}
    AND
      ${(Number(page) - 1) * Number(count) + Number(count)}
`;
exports.getProducts = getProducts;
const getProductInfo = (id) => `
  SELECT
    *
  FROM
    product_info
  WHERE
    product_id=${id}
`;
exports.getProductInfo = getProductInfo;
const getProductFeatures = (id) => `
  SELECT
    feature, value
  FROM
    features
  WHERE
    product_id=${id}
`;
exports.getProductFeatures = getProductFeatures;
const getProductRelated = (id) => `
  SELECT
    related_product_id
  FROM
    related
  WHERE
    product_id=${id}
`;
exports.getProductRelated = getProductRelated;
const getStyleSKUsTest = (id) => `
  SELECT
    skus.style_id,
    skus.sku_id,
    skus.quantity,
    skus.size
  FROM
    product_styles,
    skus
  WHERE
    product_styles.product_id = ${id}
    AND
    product_styles.style_id = skus.style_id
`;
exports.getStyleSKUsTest = getStyleSKUsTest;
const getStylePhotosTest = (id) => `
  SELECT
    product_styles.style_id,
    product_styles.name,
    product_styles.original_price,
    product_styles.sale_price,
    product_styles.default_style,

    photos.thumbnail_url,
    photos.url
  FROM
    product_styles,
    photos
  WHERE
    product_styles.product_id = ${id}
    AND
    product_styles.style_id = photos.style_id
`;
exports.getStylePhotosTest = getStylePhotosTest;
const getStylesSingle = (id) => `
  SELECT product_id AS product_id, (
    SELECT json_agg(
      json_build_object(
        'style_id', product_styles.style_id,
        'name', product_styles.name,
        'original_price', product_styles.original_price,
        'sale_price', product_styles.sale_price,
        'default?', product_styles.default_style,
        'photos', (
          SELECT array_agg(row_to_json(p))
          FROM (
            SELECT SPLIT_PART(thumbnail_url, '"', 2) AS thumbnail_url,
            SPLIT_PART(url, '"', 2) AS url
            FROM photos
            WHERE photos.style_id = product_styles.style_id
          ) p
        ),
        'skus', (
          SELECT json_object_agg(
            skus.sku_id, json_build_object(
              'quantity', skus.quantity,
              'size', skus.size
          )) FROM skus WHERE skus.style_id = product_styles.style_id
        )
      )
    ) AS results FROM product_styles WHERE product_id = ${id}
  ) FROM product_styles WHERE product_id = ${id}
`;
exports.getStylesSingle = getStylesSingle;
const getProductInfoSingle = (id) => `
  SELECT
    json_build_object (
      'product_id', Product_Info.product_id,
      'name', Product_Info.name,
      'slogan', Product_Info.slogan,
      'description', Product_Info.description,
      'category', Product_Info.category,
      'default_price', Product_Info.default_price,
      'features', (
        SELECT array_agg(row_to_json(f))
        FROM (
          SELECT
            feature AS feature,
            value AS value
          FROM
            features
          WHERE
            features.product_id = Product_Info.product_id
        ) f
      )
    )
  FROM
    Product_Info
  WHERE
    product_id = ${id}
`;
exports.getProductInfoSingle = getProductInfoSingle;
