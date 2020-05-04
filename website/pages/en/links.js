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

function Links(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: '[Vivado Design Suite に関するリファレンスのまとめはこちら](https://japan.xilinx.com/support/documentation-navigation/design-hubs.html)',
      title: 'Vivado リファレンス (日本語)',
    },
    {
      content: '[Basys3 のリファレンスはこちら](https://reference.digilentinc.com/reference/programmable-logic/basys-3/reference-manual)',
      title: 'Basys3 リファレンス (英語)',
    }
  ];

  const otherLinks = [
    {
      content: '[2020年度 高度情報演習1Aのシラバスはこちら](http://syllabus.sic.shibaura-it.ac.jp/syllabus/2020/ko1/120300.html?y=2020&g=L01)',
      title: '授業シラバス',
    },
    {
      content: '[芝浦工業大学 情報工学科 宇佐美研 ホームページはこちら](http://www.usamilab.ise.shibaura-it.ac.jp/)',
      title: '宇佐美研ホームページ',
    }
  ]

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>リンク</h1>
          </header>
          <p>公式リファレンスなどの各種リンクを紹介します。</p>
          <h2>リファレンス</h2>
          <GridBlock contents={supportLinks} layout="twoColumn" />
          <h2>授業・研究室</h2>
          <GridBlock contents={otherLinks} layout="twoColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Links;
