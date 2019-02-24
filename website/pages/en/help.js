/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `[Vivado Design Suite に関するマニュアルのまとめはこちら](https://japan.xilinx.com/support/documentation-navigation/design-hubs.html)`,
      title: 'Vivado マニュアル (日本語)',
    },
    {
      content: '[Basys3 のリファレンスはこちら](https://reference.digilentinc.com/reference/programmable-logic/basys-3/reference-manual)',
      title: 'Basys3 リファレンス (英語)',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>ヘルプページ</h1>
          </header>
          <p>公式マニュアルなどのリンクを紹介します。</p>
          <GridBlock contents={supportLinks} layout="twoColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
