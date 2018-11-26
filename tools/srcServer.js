import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';
import proxyMiddleware from 'http-proxy-middleware';
import { chalkProcessing } from './chalkConfig';

var express = require('express');
var rovrApp = express();
const winston=require('winston')
const bodyParse = require('body')
const fs=require('fs')

const bundler = webpack(config);

const proxyMidd = proxyMiddleware('/rovr-app', {
  target: 'http://asda.rovr-api.stg.walmart.com',
  changeOrigin: true, // for vhosted sites
});

console.log(chalkProcessing('Opening development build...'));


rovrApp.use(proxyMidd);

// rovrApp.use(geojsonProxy)
rovrApp.use(historyApiFallback());
rovrApp.use(webpackHotMiddleware(bundler));
rovrApp.use(
  webpackDevMiddleware(bundler, {
    // Dev middleware can't access config, so we provide publicPath
    publicPath: config.output.publicPath,
    // These settings suppress noisy webpack output so only errors are displayed
    // to the console.
    noInfo: false,
    quiet: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
    },
    // for other settings see
    // http://webpack.github.io/docs/webpack-dev-middleware.html
  }),
);

var server = rovrApp.listen(8080, function() {
  var host = 'rovr-portal-dev.walmart.com';
  var port = server.address().port;
  console.log('Rovr-Portal app listening at http://%s:%s', host, port);
});
